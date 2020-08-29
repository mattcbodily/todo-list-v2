import React, {useContext} from 'react';
import {ThemeContext} from '../../App';
import './TaskDisplay.scss';

export default props => {
    let {theme} = useContext(ThemeContext);

    return (
        <div className={`task-display ${theme}`}>
            <p>{props.task.task}</p>
            <div className='task-progress'>
                <div className={`progress-option ${props.task.progress === 'Not Started' ? 'active-not-started' : null}`} onClick={() => props.progressFn('Not Started', props.task.id)}>Not Started</div>
                <div id='in-progress' className={`progress-option ${props.task.progress === 'In Progress' ? 'active-in-progress' : null}`} onClick={() => props.progressFn('In Progress', props.task.id)}>In Progress</div>
                <div className={`progress-option ${props.task.progress === 'Complete' ? 'active-complete' : null}`} onClick={() => props.progressFn('Complete', props.task.id)}>Complete</div>
            </div>
        </div>
    )
}