import React, { Component } from 'react';
import ListItem from './ListItem';

class ListItems extends Component {
  render() {
    const commentNodes = this.props.data.map( item => {
      return (
        <ListItem name={item.name}></ListItem>
      );
    });
    return (
      <div className="list-items">
        <ul>
          {commentNodes}
        </ul>
      </div>
    );
  }
}

export default ListItems;
