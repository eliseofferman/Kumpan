import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const MyMap = withGoogleMap((props) => {

  // maps over all the saved permenet saved and renders the marker on the map
  const markers = (props.savedMarkers || []).map( (marker, index) =>
  <Marker
    key={index}
    onClick={()=> props.onMarkerClick (index)}
    position={{lat: marker.position.lat, lng: marker.position.lng}}>

    { props.showMarker && index === props.id ? // if marker is clicked InfoWindow becomes visible
      (<InfoWindow >
        <h4 className="placeName">{marker.name}</h4>
      </InfoWindow>
      ) : null
    }
  </Marker>);


  return (
      <GoogleMap  // this is the google map
        defaultZoom={11}
        center={ { lat:  props.centerPosition.lat, lng: props.centerPosition.lng } }
        onClick={props.onClickMap}
      >
        {markers} {/* vissebel if any markers/places are saved */}

        {props.newMarker ?  // if the mape is clicked a marker and InfoWindow becomes visible
          ( <Marker
            onClick={props.onNewMarkerClick}
            position={{lat: props.newMarkerPosition.lat, lng: props.newMarkerPosition.lng}}>>
            <InfoWindow className="info">
              <form onSubmit={props.handleSubmit}>
                <input
                  className="input"
                  type="text"
                  placeholder="Name of new place"
                  value={props.newPlace}
                  onChange={props.handleOnChangePlace}/>
                <button>Save</button>
              </form>
            </InfoWindow>
          </Marker>
          ) : null
        }
      </GoogleMap>
    );
  }
)

export default MyMap;
