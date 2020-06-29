import React from 'react';
import './App.css';
import TaskList from './components/TaskList'

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
    text: "",
    select: "Code",
    category: ""
  }

  handleClick = (evt) => {
    this.setState({
      category: evt.target.innerHTML
    })
  }

  handleDelete = (evt) => {
    const taskToDelete = evt.target.parentNode.innerText
    
    this.setState((prevState) => {
      return {
        tasks: prevState.tasks.filter((task) => (`${task.category}: ${task.text} x` !== taskToDelete))
      }
    })
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()

    const newTask = {
      text: this.state.text,
      category: this.state.select
    }

    this.setState((prevState) => {
      return {
      tasks: [...prevState.tasks, newTask]
    }})
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="text" value={this.state.text} onChange={this.handleChange}></input>
          <select name="select" value={this.state.select} onChange={this.handleChange}>
            <option>Code</option>
            <option>Food</option>
            <option>Money</option>
            <option>Misc</option>
          </select>
          <input type="submit" />
        </form>
        <TaskList tasks={this.state.tasks} category={this.state.category} handleClick={this.handleClick} handleDelete={this.handleDelete} />
      </div>
    );
  }
}


export default App;