import React, {useState, useEffect} from 'react';
import TaskDisplay from '../TaskDisplay/TaskDisplay';
import './TaskDashboard.scss';

export default props => {
    let [tasks, setTasks] = useState([]),
        [taskInput, setTaskInput] = useState(''),
        [taskView, setTaskView] = useState('current');

    useEffect(() => {
        let taskArr = localStorage.getItem('tasks');
        if(taskArr){
            setTasks(JSON.parse(taskArr))
        }
    }, [])

    const toggleTaskView = () => {
        taskView === 'current' ? setTaskView('complete') : setTaskView('current');
    }

    const addTask = () => {
        let newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            task: taskInput,
            progress: 'Not Started'
        }

        setTasks([...tasks, newTask]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setTaskInput('');
    }

    const updateProgress = (progress, id) => {
        let tasksCopy = [...tasks];
        let task = tasksCopy.find(e => e.id === id);
        task.progress = progress;

        setTasks(tasksCopy);
        localStorage.setItem('tasks', JSON.stringify(tasksCopy));
    }

    return (
        <section className='task-dashboard'>
            <nav>
                <div onClick={toggleTaskView} className={taskView === 'current' ? 'active-page' : 'inactive-page'}>Current</div>
                <div onClick={toggleTaskView} className={taskView === 'complete' ? 'active-page' : 'inactive-page'}>Complete</div>
            </nav>
            {taskView === 'current'
            ? (
                <section>
                    <input value={taskInput} placeholder='Enter Task' onChange={e => setTaskInput(e.target.value)}/>
                    <button onClick={addTask}>Add</button>
                </section>
            )
            : null}
            <section className='todo-container'>
                {tasks.length && taskView === 'current'
                ? tasks?.filter(task => task.progress === 'Not Started' || task.progress === 'In Progress').map((task, i) => (
                    <TaskDisplay key={i} task={task} progressFn={updateProgress}/>
                ))
                : tasks?.filter(task => task.progress === 'Complete').map((task, i) => (
                    <TaskDisplay key={i} task={task} progressFn={updateProgress}/>
                ))}
            </section>
        </section>
    )
}