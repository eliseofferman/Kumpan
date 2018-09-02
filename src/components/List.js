import React from "react";
import ListItem from "./ListItem";

export default class List extends React.Component {

  render(){
    return(
      <div>
        {this.props.listItems.map((item, index) => {
          return <ListItem key={index} item= {item}/>
        })}
      </div>
    );
  }
}
