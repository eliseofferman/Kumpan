
// DoctorsMap.js

import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const Map = withGoogleMap((props) => {

  const markers = (props.savedMarkers || []).map( (marker, index) => <Marker
    key={index}
    // onClick={props.onMarkerClick (index)}
    onClick={()=> props.onMarkerClick (index)}
    position={{lat: marker.position.lat, lng: marker.position.lng}}>

    { props.showMarker && index === props.id ?
      (<InfoWindow >
        <h4>{marker.name}</h4>
      </InfoWindow>
      ) : null
    }

  </Marker>);


  return (
      <GoogleMap
        defaultZoom={11}
        center={ { lat:  42.3601, lng: -71.0589 } }
        onClick={props.onClickMap}
      >
        {markers}

        {props.newMarker ?
          ( <Marker
            onClick={props.onNewMarkerClick}
            position={{lat: props.newMarkerPosition.lat, lng: props.newMarkerPosition.lng}}>>
            <InfoWindow >
              <form onSubmit={props.handleSubmit}>
                <input
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

export default Map;
