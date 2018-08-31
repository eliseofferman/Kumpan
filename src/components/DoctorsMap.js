
// DoctorsMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import DoctorMarker from "./DoctorMarker";

const DoctorsMap = withGoogleMap((props) =>{

  const markers = (props.markers || []).map( (marker, index) => <Marker

    // {...marker}
    key={index}
    onClick={props.onMarkerClick}
    // onRightClick={() => props.onMarkerClick(marker)}
    // doctor={doctor}
    position={{lat: marker.position.lat, lng: marker.position.lng}}
                                                       />);

  return (
      <GoogleMap
        defaultZoom={11}
        center={ { lat:  42.3601, lng: -71.0589 } }
        onClick={props.onClickMap}
      >
        {markers}
        {/* <Marker position={{ lat: 42.3601, lng: -71.0589 }}  onClick={props.onMarkerClick}/> */}

      </GoogleMap>
    );
  }
)

export default DoctorsMap;
