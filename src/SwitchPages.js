import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";


const todoList = () => ( <TodoList /> );
const todoForm = () => ( <TodoForm /> );

const SwitchPages = () => (
    <Switch>
        <Route exact path="/" component={ todoList } />
        <Route path="/todo/create" component={ todoForm } />
    </Switch>
)

export default SwitchPages;