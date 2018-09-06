import React from "react";


export default class ListItem extends React.Component {

  render(){
    return(
      <li onClick={this.props.itemZoom}>
        🤟 {this.props.item.name}
      </li>
    );
  }
}
