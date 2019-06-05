import React, { Component } from 'react';
import './Navbar.css';      

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.target.preventDefault;
    }
    
    render() {
        return (
            <ul class="nav nav-pills nav-justified">
                <li class="nav-item">
                    <a class="nav-link" href="#">ToDoApp</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Add ToDo</a>
                </li>
            </ul>
        )
    }
}

export default Navbar;