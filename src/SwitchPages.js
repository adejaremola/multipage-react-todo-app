import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";


const SwitchPages = (todoProp) => (
    <Switch>
        <Route exact path="/" render={ props => (
                <TodoList { ...props } todos={ todoProp.todos } />
            )}  
        />
        <Route exact path="/todo/create" render={ props => (
                <TodoForm 
                    { ...props } 
                    onFormSubmit={ (todo) => (
                        todoProp.onTodoSave(todo)
                    ) }
                />
            )}             
        />
    </Switch>
)

export default SwitchPages;