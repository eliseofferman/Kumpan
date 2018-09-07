import React from "react";
import MyMap from "./MyMap";
import List from "./List";

export default class MapContainer extends React.Component {

state = {
  newMarker: false, //determine if new marker is visible or not
  newPlace: '', //name for new place
  savedMarkers: [],  // all the plases/markers that is saved in to a list
  showMarker:false, //determine if InfoWindow for a permanent marker is visible or not
  id:null,  // id for InfoWindow, to make a specific InfoWindow visseble
  centerPosition:{  // the default coordinates for where the map is centered
          lat: 59.334591,
          lng: 18.063240,
        },
  
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

onNewMarkerClick = () => { // hiding a new marker when it is clicked
  this.setState({
    newMarker: !this.state.newMarker,
  })
}

handleSubmit = () => {  //saves the new marker in to permanent markers
  this.saveMarker(this.state.newPlace, this.state.newMarkerPosition)
  this.setState({
    newMarker: false,
    newPlace: '',
  })
}

saveMarker = (name, coordinates) => { // saves the new marker to the permanent markers
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
}

onMarkerClick = (id) => { // shows InfoWindow of the clicked marker
  this.setState({
    showMarker: true,
    id:id,
  })
}

handleOnChangePlace = (event) => {  // saves the entered name of new place in to state new Place
  this.setState ({
    newPlace: event.target.value
  })
}

itemZoom = (id, position) => {  // when a name in the place list is clicked, the map gets centers at the connected marker
  this.setState({
    showMarker: true,
    id:id,
    centerPosition:{
      lat: position.lat,
      lng: position.lng,
    }
  })
}

deleteItem = (id) => { // delete a item/marker
  const allMarkers = this.state.savedMarkers
    allMarkers.splice(id, 1)
    this.setState({
      savedMarkers: allMarkers
    })
}

	render() {
		return (
      <div className="mainContainer">
        <div  className="mapContainer">
          <MyMap // renders the map and added markers
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
          <h1>My places of Stockholm</h1>
          <List  // renders the list of all the added markers
            listItems={this.state.savedMarkers} itemZoom={this.itemZoom}
            deleteItem ={this.deleteItem}/>
        </div>
      </div>
		);
	}
}
