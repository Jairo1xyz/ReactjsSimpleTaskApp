import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {

    styleCompletedOrNot(){
        return {
            marginBottom: '0px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    deleteTask = () => {
        this.props.deleteTask( this.props.task.id )
    }

    toggleDone = () => {
        this.props.toggleDone( this.props.task.id )
    }

    render() {

        const { task } = this.props;

        return <div> 
            <h2 style = { this.styleCompletedOrNot() } >{ task.title }</h2>
            <p style = {{ margin: '5px 0px' }} >
                { task.description } - { task.done ? 'Done' : 'To do' } - { task.id }
                <input type="checkbox" style = {{ marginLeft: '20px' }} onChange = { this.toggleDone } />
                <button style = { btnDelete } onClick = { this.deleteTask } >x</button>
            </p>
            <hr/>
        </div>
    }
}

// With this you specify the prop type is expected to receive
// which is good for debugging
Task.propTypes = {
    task: PropTypes.object.isRequired
}

const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    marginLeft: '20px'
}

export default Task;