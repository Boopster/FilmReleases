import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
          <li><a target="_blank" href={this.props.url}>{this.props.name}</a></li>
      </div>
    );
  }
}

export default ListItem;
