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

  deleteTask = id => {
    this.setState({
      tasks: this.state.tasks.filter( task => task.id !== id )
    })
  }

  toggleDone = id => {
    const reloadedTasks = this.state.tasks.map( task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task
    } )

    this.setState({
      tasks: reloadedTasks
    })
  }

  render() {
    return <div style = {styles} >
      <h1 style = {{ marginTop: '0px' }} >Tasks</h1>
      <TaskForm addTask = { this.addTask } />
      <Tasks tasks = { this.state.tasks } deleteTask = { this.deleteTask }  toggleDone = {this.toggleDone} />
      
    </div>
  }
}

const styles = {
  padding: '20px'
}

export default App;
