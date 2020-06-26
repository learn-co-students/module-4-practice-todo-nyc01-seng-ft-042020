import React from 'react';
import './App.css';
import { CATEGORIES } from './data'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    category: ""
  }

  renderTasks = (tasks) => {
    if (this.state.category === "Code") { 
      const arrayOfTasks = this.state.tasks.filter(task => { return task.category === "Code" })
      
      return arrayOfTasks.map(task => { return <li key={`${task.text}-${task.category}`}>{task.category}: {task.text}</li> }) 
    }
    
    if (this.state.category === "Food") { 
      const arrayOfTasks = this.state.tasks.filter(task => { return task.category === "Food" })
      
      return arrayOfTasks.map(task => { return <li key={`${task.text}-${task.category}`}>{task.category}: {task.text}</li> }) 
    }
    
    if (this.state.category === "Money") { 
      const arrayOfTasks = this.state.tasks.filter(task => { return task.category === "Money" })
      
      return arrayOfTasks.map(task => { return <li key={`${task.text}-${task.category}`}>{task.category}: {task.text}</li> }) 
    }
    
    if (this.state.category === "Misc") { 
      const arrayOfTasks = this.state.tasks.filter(task => { return task.category === "Misc" })
      
      return arrayOfTasks.map(task => { return <li key={`${task.text}-${task.category}`}>{task.category}: {task.text}</li> }) 
     }
    
    else { return tasks.map(task => { return <li key={`${task.text}-${task.category}`}>{task.category}: {task.text} <button onClick={this.handleDelete}>x</button></li> }) }
  }

  handleClick = (evt) => {
    this.setState({
      category: evt.target.innerHTML
    })
  }

  handleDelete = (evt) => {
    const task = evt.target.parentNode.innerText
    
    this.setState((prevState) => {

      //Why can't I do evt.target from inside the handleDelete? 

      return {
        tasks: prevState.tasks.filter(task => (`${task.category}: ${task.text} x` !== task))
      }
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <p>Category Filters</p>
        {CATEGORIES.map(category => (<button key={category} onClick={this.handleClick}>{category}</button>))}
        <ul>
          {this.renderTasks(this.state.tasks)}
        </ul>
      </div>
    );
  }
}


export default App;
