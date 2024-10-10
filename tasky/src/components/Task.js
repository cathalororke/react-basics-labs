import React, { useState } from 'react';

const Task = (props) => {
    let priorityClass= {};
    let priorityStyle= {};
    if (props.priority === 'High'){
        priorityClass = 'high-priority';
        priorityStyle = {color : 'red'};
    }else if (props.priority === 'Medium'){
        priorityClass = 'medium-priority';
        priorityStyle = {color : 'orange'};
    }else {
        priorityClass = 'low-priority'  
        priorityStyle = {color : 'yellow'}; 
    }

    return (
        <div className={`card ${priorityClass}`} style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.children}</p>
            <p className="description">{props.description}</p>
            <p className="priority" style={priorityStyle}><strong>Priority:</strong>{props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
        
    );
}

export default Task;