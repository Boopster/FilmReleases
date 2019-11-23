import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <div className="list-item">
          <li><a href={this.props.url}>{this.props.name}</a></li>
      </div>
    );
  }
}

export default ListItem;
