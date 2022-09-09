import React, { Component } from 'react';
import {Link} from "react-router-dom"
import './App.css';



class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: [],
    };
  }
  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: '',
    });
  }
  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  }
  render() {
    return (
      <div className="App">
        <div>
         <h2 className="prg">Add an item...  </h2> 
          <br />
          <input
            type="text"
            placeholder="Type a text here.."
            value={this.state.newItem}
            onChange={(e) => this.updateInput('newItem', e.target.value)}
          />
          <button onClick={() => this.addItem()}>Add</button>
          <br />
          <ol>
            {this.state.list.map((item) => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>X</button>
                </li>
              );
            })}
          </ol>
        </div>
        <Link to="/">
    <button className="home" type="button">Back</button>
  </Link>
      </div>
    );
  }
}

export default Todo;
