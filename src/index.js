import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { 
    BrowserRouter as Router 
} from "react-router-dom";
import TodoApp from './TodoApp';

ReactDOM.render(
    <Router> 
        <TodoApp />
    </Router>, 
    document.getElementById('root')
);
