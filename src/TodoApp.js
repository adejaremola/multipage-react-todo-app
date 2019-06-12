import React, { Component } from 'react';
import SwitchPages from './SwitchPages';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      todos: [],
      nextTodoId: ''
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
      ],
      nextTodoId: 3
    })
  }

  handleTodoSave = (todo) => {
    this.setState((prevState, props) => {
        //Create the new todo first
        const newTodo = { ...todo, id: this.state.nextTodoId };
        //Now return the changes you want in the state
        return {
            nextTodoId: prevState.nextTodoId + 1,
            todos: [ ...this.state.todos, newTodo ]
        }
    })
  }
  
  render() {
    // const { todos, nextTodoId } = this.state;
    const s = {
        textDecoration: 'none',
        cursor: 'default',
        color: 'pink'
    }
    return (
      <div className="App">        
        <Navbar />
        <div>
          <SwitchPages 
            { ...this.state }
            onTodoSave={ this.handleTodoSave } />
          {/* <SwitchPages todos={ todos } nextTodoId={ nextTodoId } /> */}
        </div>
      </div>
    );
  }
}

export default TodoApp;
