import React from "react";


export default class ListItem extends React.Component {

  render(){
    return(
      <li>
        <div onClick={this.props.itemZoom}> 🤟 {this.props.item.name} </div>
        <div onClick={()=> this.props.deleteItem(this.props.id)} className="delete"> 🗑 </div>
      </li>
    );
  }
}
