import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            category: ''
        }
    }

    handleInputChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [ name ]: value
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const data = this.state;
        this.props.onFormSubmit({
            ...data
        });
        this.handleFormClear(e);
        this.props.history.push('/');        
    }

    handleFormClear = (e) => {
        e.preventDefault();
        this.setState({
            name: '',
            category: ''
        })
    }

    handleFormCancel = (e) => {
        e.preventDefault();
        this.handleFormClear(e);
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div className="card todo-form">
                <div 
                    className="card-header"
                    style={{
                        backgroundColor: 'white',
                        height: '50px'
                    }}>
                        <h3 
                            style={{
                                textAlign: 'center'
                            }}
                        >Add New Todo</h3>
                    </div>
                <div className="card-body">
                    <form onSubmit={ this.handleFormSubmit }>
                        <div className="form-group">
                            <label for="name">Todo Name:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                name="name"
                                value={ this.state.name }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <label for="category">Category:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="category" 
                                name="category"
                                value={ this.state.category }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <p className="form-control">
                                { this.state.timeDue }
                            </p>
                        </div>
                        <div className="form-group">
                            <label for="category">Time Due For Completion:</label>
                            <input 
                                type="time" 
                                className="form-control" 
                                id="time_due" 
                                name="timeDue"
                                value={ this.state.timeDue }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <button className="btn btn-primary">Submit</button>
                        <button 
                            className="btn btn-success" 
                            onClick={ this.handleFormClear }
                        >
                            Clear Fields
                        </button>
                        <button 
                            className="btn btn-danger"
                            onClick={ this.handleFormCancel }
                        >
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoForm;