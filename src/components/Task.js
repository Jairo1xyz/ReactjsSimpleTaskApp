import React, { Component } from 'react';

class Task extends Component {

    styleCompletedOrNot(){
        return {
            marginBottom: '0px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }
    render() {

        const { task } = this.props;

        return <div> 
            <h2 style = { this.styleCompletedOrNot() } >{ task.title }</h2>
            <p style = {{ margin: '5px 0px' }} >
                { task.description } - { task.done ? 'Done' : 'To do' } - { task.id }
                <input type="checkbox" style = {{ marginLeft: '20px' }} />
                <button style = { btnDelete } >x</button>
            </p>
            <hr/>
        </div>
    }
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