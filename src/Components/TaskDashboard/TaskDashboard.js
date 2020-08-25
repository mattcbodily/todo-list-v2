import React, {useState} from 'react';
import TaskDisplay from '../TaskDisplay/TaskDisplay';
import './TaskDashboard.css';

export default props => {
    let [taskInput, setTaskInput] = useState(''),
        [taskView, setTaskView] = useState('current');

    const addTask = () => {
        const {user, userSetFn} = props;

        let task = {
            id: user.tasks.length ? user.tasks[user.tasks.length - 1].id + 1 : 1,
            task: taskInput,
            progress: 'Not Started'
        }

        let userCopy = {...user};
        userCopy.tasks.push(task);

        localStorage.setItem('userObj', JSON.stringify(userCopy));
        userSetFn(userCopy);
        setTaskInput('');
    }

    const updateProgress = (progress, id) => {
        const {user, userSetFn} = props;

        let userCopy = {...user},
            task = userCopy.tasks.find(e => e.id === id);

        task.progress = progress;
        localStorage.setItem('userObj', JSON.stringify(userCopy));
        userSetFn(userCopy);
    }

    return (
        <section className='task-dashboard'>
            <input value={taskInput} placeholder='Enter Task' onChange={e => setTaskInput(e.target.value)}/>
            <button onClick={addTask}>Add</button>
            {props.user.tasks && taskView === 'current'
            ? props.user.tasks?.filter(task => task.progress === 'Not Started' || task.progress === 'In Progress').map((task, i) => (
                <TaskDisplay key={i} task={task} user={props.user} progressFn={updateProgress}/>
            ))
            : props.user.tasks?.filter(task => task.progress === 'Complete').map((task, i) => (
                <TaskDisplay key={i} task={task} user={props.user} progressFn={updateProgress}/>
            ))}

        </section>
    )
}