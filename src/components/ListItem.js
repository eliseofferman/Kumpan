import React from "react";


export default class ListItem extends React.Component {

  render(){
    return(
      <div>
        {this.props.item.name}
      </div>
    );
  }
}
