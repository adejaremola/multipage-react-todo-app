import React, { Component } from 'react';
import './Navbar.css';      
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        e.target.preventDefault;
    }
    
    render() {
        const s = {
            textDecoration: 'none',
            cursor: 'default',
            color: 'pink'
        }
        
        return (
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                    <NavLink exact activeStyle={ s } to="/" >
                        ToDoApp
                    </NavLink>
                </li>
                <li class="nav-item">
                    <NavLink exact activeStyle={ s } to="/todo/create" >
                        Add ToDo
                    </NavLink>
                </li>
            </ul>
        )
    }
}

export default Navbar;