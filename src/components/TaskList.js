import React from 'react'
import Task from './Task.js'
import { CATEGORIES } from '../data'

export default function TaskList(props) {

    function renderTasks(tasks) {
        if (props.category === "Code") { 
          const arrayOfTasks = props.tasks.filter(task => { return task.category === "Code" })
          
          return arrayOfTasks.map(task => { return <Task key={`${task.text}-${task.category}`} task={task} handleDelete={props.handleDelete}/> }) 
        }
        
        if (props.category === "Food") { 
          const arrayOfTasks = props.tasks.filter(task => { return task.category === "Food" })
          
          return arrayOfTasks.map(task => { return <Task key={`${task.text}-${task.category}`} task={task} handleDelete={props.handleDelete}/> }) 
        }
        
        if (props.category === "Money") { 
          const arrayOfTasks = props.tasks.filter(task => { return task.category === "Money" })
          
          return arrayOfTasks.map(task => { return <Task key={`${task.text}-${task.category}`} task={task} handleDelete={props.handleDelete}/> }) 
        }
        
        if (props.category === "Misc") { 
          const arrayOfTasks = props.tasks.filter(task => { return task.category === "Misc" })
          
          return arrayOfTasks.map(task => { return <Task key={`${task.text}-${task.category}`} task={task} handleDelete={props.handleDelete}/> }) 
         }
        
        else { return tasks.map(task => { return <Task key={`${task.text}-${task.category}`} task={task} handleDelete={props.handleDelete}/> }) }
      }

    return (
        <React.Fragment>
        <p>Category Filters</p>
            {CATEGORIES.map(category => (<button key={category} onClick={props.handleClick}>{category}</button>))}
            
        <ul>
          {renderTasks(props.tasks)}
        </ul>
            
        </React.Fragment>
    )

}