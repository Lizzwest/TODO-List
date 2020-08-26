import React, { Component } from 'react'
import './App.css'
import ListItem from './components/ListItem'

class MyList extends Component {
  
  render() {
    let todoItems = this.props.theList.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
      <div className="justice">
        <ul>
         {todoItems}
        </ul>
        </div>
      </div>
    )
  }
}

export default MyList