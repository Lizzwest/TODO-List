import React, { Component } from 'react'
import './App.css'
import ListItem from './components/ListItem'

class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ""
    }
  }

  clearList (e) {
    console.log("Clearing list!")
    this.setState({
      toDoItemArray: []
    })
  }
  newItemChange (e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem (e) {
   e.preventDefault()
   let newArray = this.state.toDoItemArray
   newArray.push(this.state.newItem)
   this.setState({
    toDoItemArray: newArray,
    newItem: ''
   })
  }
  
  render() {
    let todoItems = this.state.toDoItemArray.map((item, index) => (
      <ListItem doThis={item} key={index} />
    ))
    return (
      <div>
        <h1>Things I should stop procrastinating:</h1>
      <div className="justice">
        <ul>
         {todoItems}
        </ul>
        <form>
          <input type="text"
          placeholder="Add new todo list item"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
        </div>
      </div>
    )
  }
}

export default MyList