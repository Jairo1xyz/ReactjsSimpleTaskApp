import React , { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

//console.log(tasks);

class App extends Component {
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    //console.log(title, description)
    
    // We create the new task
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
      done: false
    }

    // We add the new task
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render() {
    return <div style = {styles} >
      <h1 style = {{ marginTop: '0px' }} >Tasks</h1>
      <TaskForm addTask = { this.addTask } />
      <Tasks tasks = { this.state.tasks } />
      
    </div>
  }
}

const styles = {
  padding: '20px'
}

export default App;
