import React, { Component } from 'react';

class Task extends Component {

    

    render() {

        const { task } = this.props;

        return <div> 
            <h2>{ task.title }</h2>
            <p>
                { task.description } - { task.done } - { task.id }
                <input type="checkbox" />
                <button>x</button>
            </p>
            <hr/>
        </div>
    }
}

export default Task;