import React, {useState} from 'react';
import './TaskDashboard.css';

export default props => {
    let [taskInput, setTaskInput] = useState(''),
        [taskView, setTaskView] = useState('current');

    const addTask = () => {
        const {user, userSetFn} = props;

        let task = {
            task: taskInput,
            progress: 'Not Started'
        }

        let userCopy = {...user};
        userCopy.tasks.push(task);

        localStorage.setItem('userObj', JSON.stringify(userCopy));
        userSetFn(userCopy);
        setTaskInput('');
    }

    console.log(props.user)

    return (
        <section className='task-dashboard'>
            <input value={taskInput} placeholder='Enter Task' onChange={e => setTaskInput(e.target.value)}/>
            <button onClick={addTask}>Add</button>
            {props.user.tasks && taskView === 'current'
            ? props.user.tasks?.filter(task => task.progress === 'Not Started' || task.progress === 'In Progress').map((task, i) => (
                <p key={i}>{task.task}</p>
            ))
            : props.user.tasks?.filter(task => task.progress === 'Done').map((task, i) => (
                <p key={i}>{task.task}</p>
            ))}

        </section>
    )
}