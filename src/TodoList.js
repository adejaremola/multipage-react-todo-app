import React, { Component } from 'react';
import './TodoList.css';
import Todo from './Todo';

class TodoList extends Component {
    render() {
        // const todos = this.props.todos.map((t) => (
        //     <Todo 
        //         key={ t.id }
        //         { ...t }
        //     />
        // ))
        return (
            <div className="todo-list">
                This is a todo List
            </div>
        )
    }
}

export default TodoList;