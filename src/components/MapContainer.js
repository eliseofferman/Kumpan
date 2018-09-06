// DoctorMapContainer.js

import React from "react";
import MyMap from "./MyMap";
import List from "./List";

export default class MapContainer extends React.Component {

state = {
  newMarker: false, //determens if new marker is vissibel or not
  newPlace: '', //name for new place
  savedMarkers: [],
  showMarker:false,
  id:null,
  centerPosition:{
          lat: 59.334591,
          lng: 18.063240,
        },
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
    newMarker: !this.state.newMarker,
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

saveMarker = (name, coordinates) => { // saves the new marker to the permenet markers
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

onMarkerClick = (id) => { // shows the clicked marker
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

itemZoom = (id, position) => {  // when a places in the list is clicked the map centers to the connected marker
  console.log("hej", id, position);
  this.setState({
    showMarker: true,
    id:id,
    centerPosition:{
      lat: position.lat,
      lng: position.lng,
    }
  })
}

deleteItem = (id) => { // delets a item/marker
  console.log("delete", id);
  const allMarkers = this.state.savedMarkers
    allMarkers.splice(id, 1)
    this.setState({
      savedMarkers: allMarkers
    })
}

	render() {
    // console.log(this.state.markers);
		return (
      <div className="mainContainer">
        <div  className="mapContainer">
          <MyMap
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
            centerPosition={this.state.centerPosition}
          />
        </div>
        <div className="listContainer">
          <h1>Places of Stockholm</h1>
          <List
            listItems={this.state.savedMarkers} itemZoom={this.itemZoom}
            deleteItem ={this.deleteItem}/>
        </div>
      </div>
		);
	}
}
