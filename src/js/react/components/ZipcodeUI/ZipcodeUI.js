import React from "react";

const ZipcodeUI = ({
  updateLocationOptions,
  zipcode,
  handleZipInput,
  geoEnabled,
  errorGeoLocation,
  populateZipFromGeo
}) => {
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

  return (
    <div>
      <form onSubmit={updateLocationOptions}>
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
          <div>{geoLocationButtonUI()}</div>
        </div>
      </form>
    </div>
  );
};

export default ZipcodeUI;
