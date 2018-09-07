import React from "react";
import ListItem from "./ListItem";

export default class List extends React.Component {

  render(){
    const listItems = this.props.listItems; // saves the array of saved or saved markers/places in to variable
    return(
    <div>
      {listItems[0] ? // checks if any markers/places are saved
        //if markers/places are saved the <ul> gets rendered
        ( <ul>
          {this.props.listItems.map((item, index) => {
            return <ListItem
              key={index}
              id={index}
              item= {item}
              itemZoom={this.props.itemZoom} deleteItem={this.props.deleteItem}/>
          })}
        </ul> ) :
        // otherwise below is visible on now markers are saved
        (<h4>Start your list by clicking on the map and hit save</h4>)
      }
    </div>

    );
  }
}
