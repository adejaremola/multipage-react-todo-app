import React, { Component } from 'react';
import Navbar from './Navbar';
import TodoList from './TodoList';
import './TodoApp.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: []
    }
  }
  
  componentDidMount() {
    this.setState({
      todos: [
        {
          id: 1,
          name: 'Create A React Project',
          category: 'Learning',
          timeCreated: '',
          timeDue: ''
        },
        {
          id: 2,
          name: 'Handle Laundry',
          category: 'Domestic Duties',
          timeCreated: '',
          timeDue: ''
        }
      ]
    })
  }
  
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <Navbar />
        <TodoList todos={ todos }/>
      </div>
    );
  }
}

export default TodoApp;
