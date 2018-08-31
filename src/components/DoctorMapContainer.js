// DoctorMapContainer.js

import React from "react";
import DoctorsMap from "./DoctorsMap";

export default class DoctorMapContainer extends React.Component {

state = {
  markers:[
    // {
    //     position:{
    //       lat: 42.3601,
    //       lng: -71.0589,
    //     },
    //   }
    ]
}

onMarkerClick = () => {
  console.log("Marker Clicked");
  const newMarker = this.state.markers
  newMarker.push()
}

onClickMap = (e) => {
  console.log(this.state.markers);
  console.log("Clicked map,", e.latLng.lat, e.latLng.lng);
  const newMarker = this.state.markers;
  newMarker.push({position:{
    lat: e.latLng.lat(),
    lng: e.latLng.lng(),
  }})
  this.setState({
        markers: newMarker
  })
  console.log(this.state.markers);
}

// const allActivities = this.state.activities
//     allActivities.push({ id: Date.now(), title: activity, days: [0, 0, 0, 0, 0, 0, 0] })
//
//     this.setState({
//       activities: allActivities
//     })

	render() {
    // console.log(this.state.markers);
		return (
      <div style={{height:"100%"}}>
        <DoctorsMap
          containerElement={<div style={{ height: `600px`, width: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          onMarkerClick={this.onMarkerClick}
          onClickMap={this.onClickMap}
          markers={this.state.markers}
        />
      </div>
		);
	}
}
