import React from 'react';
import './TaskDisplay.css';

export default props => {
    console.log(props.task)
    return (
        <div className='task-display'>
            <p>{props.task.task}</p>
            <div className='task-progress'>
                <div id='not-started' className={`progress-option ${props.task.progress === 'Not Started' ? 'active' : null}`}>Not Started</div>
                <div id='in-progress' className={`progress-option ${props.task.progress === 'In Progress' ? 'active' : null}`}>In Progress</div>
                <div id='complete' className={`progress-option ${props.task.progress === 'Complete' ? 'active' : null}`}>Complete</div>
            </div>
        </div>
    )
}