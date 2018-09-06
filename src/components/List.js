import React from "react";
import ListItem from "./ListItem";

export default class List extends React.Component {

  render(){
    const listItems = this.props.listItems;
    return(
    <div>
      {listItems[0] ?
        ( <ul>
          {this.props.listItems.map((item, index) => {
            return <ListItem
              key={index}
              id={index}
              item= {item}
              itemZoom={this.props.itemZoom} deleteItem={this.props.deleteItem}/>
          })}
        </ul> ) :
        (<h4>Start your list by clicking on the map and hit save</h4>)
      }
    </div>

    );
  }
}
