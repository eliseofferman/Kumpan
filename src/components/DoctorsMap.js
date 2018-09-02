
// DoctorsMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";
import DoctorMarker from "./DoctorMarker";

const DoctorsMap = withGoogleMap((props) =>{

  const markers = (props.markers || []).map( (marker, index) => <Marker
    key={index}
    onClick={props.onMarkerClick}
    position={{lat: marker.position.lat, lng: marker.position.lng}}>
    <InfoWindow >
      <h1>hello</h1>
    </InfoWindow>
  </Marker>);

  return (
      <GoogleMap
        defaultZoom={11}
        center={ { lat:  42.3601, lng: -71.0589 } }
        onClick={props.onClickMap}
      >
        {markers}

      </GoogleMap>
    );
  }
)

export default DoctorsMap;
