import React from 'react';
import './Todo.css'

function Todo(props) {
    const { id, name, category, timeCreated, timeDue } = props;   
    return (
        <div className="card a-todo">
            <div className="card-body">
                <h4 className="card-title">{ category }</h4>
                <h3 className="card-text">{ name }</h3>
                <p className="card-text">
                    <span className="card-text">Created: { timeCreated }</span>
                    <span 
                        style={{float: 'right'}} 
                        className="card-text"
                    >Done Before: { timeDue }
                    </span>
                </p>
                <a 
                    href="#" 
                    className="stretched-link"                 
                    style={{textDecoration: 'none'}}
                >Full Preview</a>
            </div>
        </div>
    )
}

export default Todo;