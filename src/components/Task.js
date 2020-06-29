import React from 'react' 

const Task = (props) => {
    return <li>{props.task.category}: {props.task.text}
        <button onClick={props.handleDelete}>x</button></li> 
}

export default Task 