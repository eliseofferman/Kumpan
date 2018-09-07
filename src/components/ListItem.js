import React from "react";

export default class ListItem extends React.Component {

  render(){
    return (
      <li>
        <div onClick={()=> this.props.itemZoom(this.props.id, this.props.item.position)}>
          🤟 {this.props.item.name}  {/* name if the saved plase */}
        </div>
        <div onClick={()=> this.props.deleteItem(this.props.id)} className="delete">
          🗑    {/* the deleat button */}
        </div>
      </li>
    );
  }
}
