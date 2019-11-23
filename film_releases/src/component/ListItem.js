import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
          <li>{this.props.name}</li>
      </div>
    );
  }
}

export default ListItem;
