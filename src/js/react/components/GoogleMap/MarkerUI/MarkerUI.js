import React, { Fragment, Component } from "react";
import { Marker } from "google-maps-react";

const MarkerUI = ({ markers, onMarkerClick }) => {
  const filterMarkers = markers.filter(marker => {
    return marker.Position && marker.Position.Lat;
  });

  console.log(filterMarkers);

  return filterMarkers.map(marker => {
    return (
      <Marker
        key={marker.Title + marker.Position.Lat}
        onClick={onMarkerClick}
        title={marker.Title}
        name={marker.Title}
        position={{
          lat: parseFloat(marker.Position.Lat),
          lng: parseFloat(marker.Position.Lng)
        }}
      />
    );
  });
  // alert(markersArr.length);
};

export default MarkerUI;
