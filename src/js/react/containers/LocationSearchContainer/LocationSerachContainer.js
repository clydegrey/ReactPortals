import React, { useState, useEffect, Fragment } from "react";
import RemoteSearchBox from "../../components/RemoteSearchBox";
import RemoteFilters from "../../components/RemoteFilters";
import SearchBox from "../../components/SearchBox";
// import DynamicForm from "../../components/DynamicForm";
// import FormCheckBox from "../../components/DynamicForm/elements/FormCheckBox";
import CardHasImage from "../../components/CardHasImage";
import axios from "axios";

const LocationSearchContainer = ({ filterapi, searchapi }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locations, setLocations] = useState([]);
  const [filters, setFilters] = useState([]);
  const [activeFilters, setActiveFilters] = useState({});
  const [searchUrl, setSearchUrl] = useState(searchapi);
  const [cleanedZipcode, setCleanedZipcode] = useState();
  const [zipcode, setZipcode] = useState("");
  const [radius, setRadius] = useState("25");
  const [geoLocation, setGeoLocation] = useState("");
  const [clientLocation, setClientLocation] = useState("");
  const [errorGeoLocation, setErrorGeolocation] = useState("");
  const [geoEnabled, setGeoEnabled] = useState(false);

  const onChangeHandler = e => {
    const value = e.target.value;
    setSearchTerm(() => value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    buildSearchUrl();
  };

  useEffect(() => {
    getLocations();
  }, [searchUrl]);

  useEffect(() => {
    navigator.permissions.query({ name: "geolocation" }).then(res => {
      if (res && res.state) {
        setGeoEnabled(() => res.state !== "denied");
      }
    });
    getFilters();
  }, []);

  useEffect(() => {
    buildSearchUrl();
    // let params = [];
    // const keyNames = Object.keys(activeFilters);
    // keyNames.forEach(key => {
    //   const filterTerms = [...activeFilters[key]].join(",");
    //   filterTerms.length && params.push(`${key}=${filterTerms}`);
    // });
    // let updatedUrl = `${searchapi}?${params.join("&")}`;
    // if (clientLocation) {
    //   updatedUrl = `${updatedUrl}&${clientLocation}`;
    // }
    // if (searchTerm) {
    //   updatedUrl = `${updatedUrl}&keywords="${searchTerm}"`;
    // }
    // setSearchUrl(() => {
    //   return updatedUrl;
    // });
  }, [activeFilters, clientLocation]);

  const checkHandler = (e, FilterCodeName) => {
    const checked = e.target.checked;
    const val = e.target.value;
    setActiveFilters(prevState => {
      let set = prevState[FilterCodeName] || new Set();
      if (checked) {
        set.has(val) || set.add(val);
      } else {
        set.has(val) && set.delete(val);
      }
      prevState[FilterCodeName] = set;
      return Object.assign({}, prevState);
    });
  };

  const getFilters = async () => {
    try {
      const res = await axios.get(filterapi);

      const filters = res.data;

      // console.log(filters);

      setFilters(() => filters);
    } catch (error) {
      console.log(error);
    }
  };

  const createFilterGroups = () => {
    const onChangeHandler = () => {};
    return filters.map(({ FilterCodeName, FilterDisplayName, FilterItems }) => {
      return (
        <div key={FilterCodeName}>
          <details>
            <summary>{FilterDisplayName}</summary>
            <fieldset>
              <legend>{FilterDisplayName}</legend>
              {/* <FormCheckBox
              options={FilterItems}
              value={""}
              onChangeHandler={onChangeHandler}
              fieldDisplayName={FilterDisplayName}
            /> */}
              {/* options, value, onChangeHandler, fieldCodeName, explanationText,
            errorMessage, hasErrors, fieldDisplayName */}

              {FilterItems.map(item => (
                <Fragment key={item.Name + item.Value}>
                  {/* <span>{`${item.Name}${item.Value}`}</span> */}
                  <input
                    type="checkbox"
                    value={item.Value}
                    onChange={e => {
                      checkHandler(e, FilterCodeName);
                    }}
                  />
                  {item.Name} <h2>{`${item.Name}${item.Value}`}</h2>
                </Fragment>
              ))}
            </fieldset>
          </details>
        </div>
      );
    });
  };

  const buildSearchUrl = () => {
    let params = [];
    const keyNames = Object.keys(activeFilters);
    keyNames.forEach(key => {
      const filterTerms = [...activeFilters[key]].join(",");
      filterTerms.length && params.push(`${key}=${filterTerms}`);
    });
    let updatedUrl = `${searchapi}?${params.join("&")}`;
    if (clientLocation) {
      updatedUrl = `${updatedUrl}&${clientLocation}`;
    }
    if (searchTerm) {
      updatedUrl = `${updatedUrl}&keywords="${searchTerm}"`;
    }
    setSearchUrl(() => {
      return updatedUrl;
    });
  };

  const getLocations = async () => {
    try {
      // const res = await axios.get(searchUrl);

      const res = await axios.get("/dummy.json");

      console.log(res);
      const locations = res.data;
      setLocations(() => locations);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {}, [clientLocation]);

  useEffect(() => {
    setClientLocation(() => {
      if (cleanedZipcode) {
        return `zip=${cleanedZipcode}&radius=${radius}`;
      }
      return ``;
    });
  }, [cleanedZipcode, radius, geoLocation]);

  const postalCodeLookup = () => {
    var head = document.getElementsByTagName("head")[0],
      script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDZJyatQOMsKV6WP9703CrHb1QCsyRl3P0";
    head.appendChild(script);
    script.onload = function() {
      if (navigator.geolocation) {
        var fallback = setTimeout(function() {
          fail("10 seconds expired");
        }, 10000);

        navigator.geolocation.getCurrentPosition(
          function(pos) {
            clearTimeout(fallback);

            var point = new google.maps.LatLng(
              pos.coords.latitude,
              pos.coords.longitude
            );
            new google.maps.Geocoder().geocode({ latLng: point }, function(
              res,
              status
            ) {
              if (
                status == google.maps.GeocoderStatus.OK &&
                typeof res[0] !== "undefined"
              ) {
                var zip = res[0].formatted_address.match(/,\s\w{2}\s(\d{5})/);
                if (zip) {
                  setGeoLocation(zip[1]);
                  setCleanedZipcode(zip[1]);
                  setZipcode(zip[1]);
                } else {
                  setErrorGeolocation("Unable to look-up postal code");
                  fail("Unable to look-up zip code");
                }
              } else {
                setErrorGeolocation("Unable to look-up geolocation");
                fail("Unable to look-up geolocation");
              }
            });
          },
          function(err) {
            fail(err.message);
          }
        );
      } else {
        alert("Unable to find your location.");
      }
      function fail(err) {
        console.log("err", err);
        // a.value("Try Again.");
      }
    };
  };

  const updateLocationOptions = e => {
    e.preventDefault();
    setCleanedZipcode(zipcode);
    // let zip = zipcode.trim();
    // zip = parseInt(zip);
    // if (Number.isInteger(zip) || zip === "") {
    //   setCleanedZipcode(zip);
    // }
  };

  const populateZipFromGeo = () => {
    if (geoLocation) {
      setZipcode(geoLocation);
    } else {
      postalCodeLookup();
    }
  };

  const geoLocationButtonUI = () => {
    if (!geoEnabled) {
      return null;
    }
    return errorGeoLocation ? (
      <div>{errorGeoLocation}</div>
    ) : (
      <button type="button" onClick={populateZipFromGeo}>
        use my current location
      </button>
    );
  };

  const handleZipInput = e => {
    const val = parseInt(e.target.value.trim());
    setZipcode(prev => {
      let zip = "";
      if (!val) {
        return zip;
      }
      zip = Number.isInteger(val) ? [val].join() : prev;
      if (zip.length > 5) {
        zip = zip.substring(0, 5);
      }
      return zip;
    });
  };

  const getLocationsUI = () => {
    const cards = locations.Items.map(item => (
      <CardHasImage key={item.Address + item.Title} {...item} />
      // <div key={`${item.address}${item.title}`}>
      //   <img src={item.Image} alt="" />
      // </div>
    ));
    return cards;
  };

  // console.log("************");
  // console.log(locations);
  // console.log("************");

  return (
    <div>
      {/* <p>Searched Term {searchTerm}</p>
      <h1>{searchUrl}</h1>
      <p></p> */}
      <RemoteSearchBox>
        <form onSubmit={onSubmitHandler}>
          <SearchBox value={searchTerm} onChange={onChangeHandler} />
          <button type="submit">submit</button>
        </form>
      </RemoteSearchBox>

      <RemoteFilters>
        <form onSubmit={updateLocationOptions}>
          <div>
            <h3>See doctors in your area:</h3>
            <div>
              <span>Within</span>
              <select onChange={e => setRadius(e.target.value)}>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <span>miles of</span>
              <input value={zipcode} onChange={handleZipInput} type="text" />
              <button type="submit">go</button>
              <div>
                {geoLocationButtonUI()}
                {/* {errorGeoLocation ? (
                <div>{errorGeoLocation}</div>
              ) : (
                <button type="button" onClick={populateZipFromGeo}>
                  use my current location
                </button>
              )} */}
              </div>
            </div>
          </div>
          {filters.length ? createFilterGroups() : null}
        </form>
      </RemoteFilters>
      {/* <pre>{locations.item ? "true" : "false"}</pre> */}
      {locations.Items && locations.Items.length && getLocationsUI()}
      <pre>{JSON.stringify(locations)}</pre>
    </div>
  );
};

export default LocationSearchContainer;
