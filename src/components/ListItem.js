import React, { Component } from 'react'
import '../App.css'

class ListItem extends Component {
  render() {
    return (
      <div className="listItem">
        <li>{this.props.doThis}</li>
      </div>
    )
  }
}

export default ListItem