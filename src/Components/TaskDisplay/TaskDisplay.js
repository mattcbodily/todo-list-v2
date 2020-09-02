import React, {useContext} from 'react';
import {ThemeContext} from '../../App';
import './TaskDisplay.scss';

export default props => {
    let {theme} = useContext(ThemeContext);

    return (
        <div className={`task-display ${theme}`}>
            <section className='task'>
                <p>{props.task.task}</p>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => props.deleteFn(props.task.id)} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="gray" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="delete-icon">
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
            </section>
            <div className='task-progress'>
                <div className={`progress-option ${props.task.progress === 'Not Started' ? 'active-not-started' : 'not-active'}`} onClick={() => props.progressFn('Not Started', props.task.id)}>Not Started</div>
                <div id='in-progress' className={`progress-option ${props.task.progress === 'In Progress' ? 'active-in-progress' : 'not-active'}`} onClick={() => props.progressFn('In Progress', props.task.id)}>In Progress</div>
                <div className={`progress-option ${props.task.progress === 'Complete' ? 'active-complete' : 'not-active'}`} onClick={() => props.progressFn('Complete', props.task.id)}>Complete</div>
            </div>
        </div>
    )
}