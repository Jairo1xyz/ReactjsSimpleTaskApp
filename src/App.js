import React , { Component } from 'react';
import './App.css';

import tasks from './sample/tasks.json';

import Tasks from './components/Tasks';

//console.log(tasks);

class App extends Component {
  state = {
    tasks: tasks
  }
  render() {
    return <div style = {styles} >
      <Tasks tasks = { this.state.tasks } />
      
    </div>
  }
}

const styles = {
  padding: '20px'
}

export default App;
