// DoctorMapContainer.js

import React from "react";
import DoctorsMap from "./DoctorsMap";

export default class DoctorMapContainer extends React.Component {

onMarkerClick = () => {
  console.log("Marker Clicked");
}
	render() {
		return (
      <div style={{height:"100%"}}>
        <DoctorsMap
          containerElement={<div style={{ height: `600px`, width: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMarkerClick={this.onMarkerClick}
        />
      </div>
		);
	}
}
