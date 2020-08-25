import React from 'react';
import './TaskDisplay.scss';

export default props => {
    return (
        <div className='task-display'>
            <p>{props.task.task}</p>
            <div className='task-progress'>
                <div className={`progress-option ${props.task.progress === 'Not Started' ? 'active' : null}`} onClick={() => props.progressFn('Not Started', props.task.id)}>Not Started</div>
                <div id='in-progress' className={`progress-option ${props.task.progress === 'In Progress' ? 'active' : null}`} onClick={() => props.progressFn('In Progress', props.task.id)}>In Progress</div>
                <div className={`progress-option ${props.task.progress === 'Complete' ? 'active' : null}`} onClick={() => props.progressFn('Complete', props.task.id)}>Complete</div>
            </div>
        </div>
    )
}