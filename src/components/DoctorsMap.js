
// DoctorsMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import DoctorMarker from "./DoctorMarker";

const DoctorsMap = withGoogleMap((props) =>{

  const markers = (props.doctors || []).map( doctor => <DoctorMarker
    key={doctor.uid}
    doctor={doctor}
    location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
                                                       />);

  return (
      <GoogleMap
        defaultZoom={11}
        center={ { lat:  42.3601, lng: -71.0589 } }
      >
        {/* {markers} */}
        <Marker position={{ lat: 42.3601, lng: -71.0589 }}  onClick={props.onMarkerClick}/>

      </GoogleMap>
    );
  }
)

export default DoctorsMap;
