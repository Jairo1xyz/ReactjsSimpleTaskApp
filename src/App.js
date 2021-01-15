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
  render() {
    return <div style = {styles} >
      <h1 style = {{ marginTop: '0px' }} >Tasks</h1>
      <TaskForm/>
      <Tasks tasks = { this.state.tasks } />
      
    </div>
  }
}

const styles = {
  padding: '20px'
}

export default App;
