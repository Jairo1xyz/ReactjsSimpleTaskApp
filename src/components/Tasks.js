import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Task from "./Task";

class Tasks extends Component {
    render() {
        return <div>
            <h1 style = {{ marginTop: '0px' }} >Tasks</h1>
            { this.props.tasks.map( e => <Task task= { e } key= {e.id} /> )}
        </div>
    }
}

// With this you specify the prop type is expected to receive
// which is good for debugging
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks;