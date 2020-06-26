import React from 'react'

export default function Task(props) {
    return <li>{props.task.category}: {props.task.text}
        <button onClick={props.handleDelete}>x</button></li>
}