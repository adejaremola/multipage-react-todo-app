import React, { Component } from 'react';
import SwitchPages from './SwitchPages';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

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
    const s = {
        textDecoration: 'none',
        cursor: 'default',
        color: 'pink'
    }
    return (
      <div className="App">        
        <Navbar />
        <div>
          <SwitchPages />
        </div>
      </div>
    );
  }
}

export default TodoApp;
