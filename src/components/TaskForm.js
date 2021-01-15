import React, { Component } from 'react';

export default class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {

        //With this the page does not refresh when the form is submitted
        e.preventDefault(); 
    }

    onChange = e => {
        //console.log(e.target.name, e.target.value);

        // This is necessary to update the respective state value
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return <form onSubmit = {this.onSubmit} >
            <input type = "text" name = "title" placeholder = "Write a task..." onChange = { this.onChange } value = { this.state.title } />
            <br/><br/>
            <textarea name = "description" placeholder = "Write a description..." onChange = { this.onChange } value = { this.state.description } ></textarea>
            <br/><br/>
            <button type = "submit">Add Task</button>
        </form>
    }
}