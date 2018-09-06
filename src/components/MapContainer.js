// DoctorMapContainer.js

import React from "react";
import Map from "./Map";
import List from "./List";

export default class MapContainer extends React.Component {

state = {
  newMarker: false, //determens if new marker is vissibel or not
  newPlace: '', //name for new place
  savedMarkers: [],
  showMarker:false,
  id:null,
  // position:{
  //         lat: 42.3601,
  //         lng: -71.0589,
  //       },
  // markers:[
  //   {
  //       position:{
  //         lat: 42.3601,
  //         lng: -71.0589,
  //       },
  //     }
  //   ]
}

onClickMap = (e) => { //adds a new marker on the map
  this.setState({
    newMarker: true,
    newMarkerPosition:{
       lat: e.latLng.lat(),
       lng: e.latLng.lng(),
     }
  })
}

onNewMarkerClick = () => { // hids the new marker
  this.setState({
    newMarker: false,
  })
}

handleSubmit = () => {  //saves the new marker in to permenents markers
  console.log("handleSubmit");
  this.saveMarker(this.state.newPlace, this.state.newMarkerPosition)
  this.setState({
    newMarker: false,
    newPlace: '',
  })
}

saveMarker = (name, coordinates) => {
  const markers = this.state.savedMarkers;
  markers.push({
    position:{
      lat: coordinates.lat,
      lng: coordinates.lng,
    },
    name: name
  })
  this.setState({
        savedMarkers: markers
  })
  console.log(this.state.savedMarkers);
}

onMarkerClick = (id) => {
  console.log(id);
  this.setState({
    showMarker: true,
    id:id,
  })
}

handleOnChangePlace = (event) => {
  this.setState ({
      newPlace: event.target.value
    })
}

itemZoom = () => {
  console.log("hej");
}

	render() {
    // console.log(this.state.markers);
		return (
      <div className="mainContainer">
        <div  className="mapContainer">
          <Map
            containerElement={<div style={{ height: `100vh`, width: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            onMarkerClick={this.onMarkerClick}
            onClickMap={this.onClickMap}
            savedMarkers={this.state.savedMarkers}
            newMarker={this.state.newMarker}
            newMarkerPosition={this.state.newMarkerPosition}
            handleSubmit={this.handleSubmit}
            onNewMarkerClick={this.onNewMarkerClick}
            newPlace={this.state.newPlace}
            handleOnChangePlace={this.handleOnChangePlace}
            showMarker={this.state.showMarker}
            id={this.state.id}
          />
        </div>
        <div className="listContainer">
          <h1>Plases of Stockholm</h1>
          <List listItems={this.state.savedMarkers} itemZoom={this.itemZoom}/>
        </div>
      </div>
		);
	}
}
