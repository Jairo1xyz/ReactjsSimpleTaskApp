import React, { Component } from 'react';

import Task from "./Task";

class Tasks extends Component {
    render() {
        return <div>
            <h1>Tasks</h1>
            { this.props.tasks.map( e => <Task task= { e } key= {e.id} /> )}
        </div>
    }
}

export default Tasks;