import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import MarkerUI from "./MarkerUI";
import InfoCardUI from "./InfoCardUI";

import styled from "@emotion/styled";

const mapStyles = {
  width: "100%",
  height: "100%"
};
export class GoogleMap extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  getUI = props => {
    const filterMarkers = this.props.markers.filter(
      marker => marker.GeoLocation && marker.GeoLocation.Latitude
    );

    const markersArr = filterMarkers.map(marker => (
      <Marker
        key={marker.Title + marker.GeoLocation.Lat}
        onClick={this.onMarkerClick}
        title={marker.Title}
        name={marker.Title}
        {...marker}
        position={{
          lat: parseFloat(marker.GeoLocation.Latitude),
          lng: parseFloat(marker.GeoLocation.Longitude)
        }}
      />
    ));
    return markersArr;
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: 26.507851, lng: -81.917747 }}
      >
        {this.getUI()}
        {/* <MarkerUI
          onMarkerClick={this.onMarkerClick}
          markers={this.props.markers}
        /> */}
        {/* <Marker
          onClick={this.onMarkerClick}
          name={"Kenyatta International Convention Centre"}
        /> */}
        {/* <Marker
          onClick={this.onMarkerClick}
          title={"The marker`s title will appear as a tooltip."}
          name={"SOMA"}
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
        <Marker
          onClick={this.onMarkerClick}
          name={"Dolores park"}
          position={{ lat: 37.759703, lng: -122.428093 }}
        /> */}
        {/* <Marker
          onClick={this.onMarkerClick}
          name={"Dolores park"}
          position={{ lat: 37.759703, lng: -122.428093 }}
        /> */}
        {/* <Marker
          onMarkerClick={this.onMarkerClick}
          markers={this.props.markers}
        /> */}
        {/* <Marker
          name={"Dolores park"}
          position={{ lat: 37.759703, lng: -122.428093 }}
        /> */}

        {/* <Marker
          onClick={this.onMarkerClick}
          name={"Your position"}
          position={{ lat: 37.762391, lng: -122.439192 }}
          icon={{
            url: "/path/to/custom_icon.png",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64)
          }}
        /> */}
        <InfoWindow
          style={{ border: "2px solid red" }}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <InfoCardUI {...this.state.selectedPlace} />
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZJyatQOMsKV6WP9703CrHb1QCsyRl3P0"
})(GoogleMap);

// {
//   "Image": "https://maps.googleapis.com/maps/api/staticmap?center=26.5072630%2c-81.9131600&markers=color%3ared%7csize%3amid%7c26.5072630%2c-81.9131600&zoom=15&size=200x200&key=AIzaSyAWZQu-QpnjtZxwGOccr6B4yDTCdmc03g4",
//   "Title": "Golisano Children’s Hospital of Southwest Florida",
//   "Summary": ["9981 S. HealthPark Drive", " Fort Myers, FL 33908"],
//   "Subtitle": null,
//   "Link1Url": "https://www.google.com/maps/dir/9981+S.+HealthPark+Drive++Fort+Myers+FL+33908",
//   "Link1Text": null,
//   "Address": "135b7311-d7e3-45da-966a-cef4a0174e84",
//   "Link2Url": null,
//   "Link2Text": null,
//   "Link3Url": null,
//   "Link3Text": null,
//   "PrimaryButtonUrl": "tell:2393432000",
//   "PrimaryButtonText": "239-343-2000",
//   "SecondaryButtonUrl": "/find-a-location/golisano-children’s-hospital-of-southwest-florida",
//   "SecondaryButtonText": "View Details",
//   "Fee": null,
//   "Rating": null,
//   "Position": {
//     "Lat": "26.507851",
//     "Lng": "-81.917747"
//   }
// },
