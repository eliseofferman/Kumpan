// DoctorMapContainer.js

import React from "react";
import DoctorsMap from "./DoctorsMap";
import List from "./List";

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
  }, name: "Elise"})
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
      <div style={{width:"100%", height: `100%`}}>
        <div style={{width:"70%", height: `100%`}}>
          <DoctorsMap
            containerElement={<div style={{ height: `700px`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            onMarkerClick={this.onMarkerClick}
            onClickMap={this.onClickMap}
            markers={this.state.markers}
          />
        </div>
        <List listItems={this.state.markers}/>
      </div>
		);
	}
}
