import React, { Component } from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";
import MarkerUI from "./MarkerUI";

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
      marker => marker.Position && marker.Position.Lat
    );
    const markersArr = filterMarkers.map(marker => (
      <Marker
        key={marker.Title + marker.Position.Lat}
        onClick={this.onMarkerClick}
        title={marker.Title}
        name={marker.Title}
        position={{
          lat: parseFloat(marker.Position.Lat),
          lng: parseFloat(marker.Position.Lng)
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
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDZJyatQOMsKV6WP9703CrHb1QCsyRl3P0"
})(GoogleMap);
