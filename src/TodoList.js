import React, { Component } from 'react'
import TodoItems from './TodoItems'
//import cx from 'classnames'; //or
//import classNames from 'classnames/bind';
import './TodoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(e) {
    if (this._inputElement.value !=="") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState( (prevState) => {
         return {
           items: prevState.items.concat(newItem)
         };
      })
      this._inputElement.value = ""
    }
    console.log(this.state.items);
    e.preventDefault()
  } //close addItem() f(x)

  deleteItem(key) {

    let filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    })
    this.setState({
      items: filteredItems
    })
  }

  render() {
    let listLength = this.state.items.length;
    return(

      <div className="listMain">
        <div className="listHeader">
        <h2> Todo: </h2>
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeHolder={"enter todo list item"}>
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        {`${listLength} items in list`}
        <TodoItems entries={this.state.items}
                    delete={this.deleteItem}/>
      </div>
    );
  }
}

export default TodoList
