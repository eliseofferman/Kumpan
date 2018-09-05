import React from "react";


export default class ListItem extends React.Component {

  render(){
    return(
      <div onClick={this.props.itemZoom}>
        {this.props.item.name}
      </div>
    );
  }
}
