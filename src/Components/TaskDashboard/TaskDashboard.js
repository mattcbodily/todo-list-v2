import React, {useState, useEffect, useContext} from 'react';
import {ThemeContext} from '../../App';
import TaskDisplay from '../TaskDisplay/TaskDisplay';
import './TaskDashboard.scss';

export default props => {
    let [tasks, setTasks] = useState([]),
        [taskInput, setTaskInput] = useState(''),
        [taskView, setTaskView] = useState('current');

    let {theme} = useContext(ThemeContext);

    useEffect(() => {
        let taskArr = localStorage.getItem('tasks');
        if(taskArr){
            setTasks(JSON.parse(taskArr))
        }
    }, [])

    const toggleTaskView = () => {
        taskView === 'current' ? setTaskView('complete') : setTaskView('current');
    }

    const addTask = (e) => {
        e.preventDefault();

        if(taskInput){
            let newTask = {
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                task: taskInput,
                progress: 'Not Started'
            }
    
            setTasks([...tasks, newTask]);
            localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
            setTaskInput('');
        }
    }

    const updateProgress = (progress, id) => {
        let tasksCopy = [...tasks];
        let task = tasksCopy.find(e => e.id === id);
        task.progress = progress;

        setTasks(tasksCopy);
        localStorage.setItem('tasks', JSON.stringify(tasksCopy));
    }

    const deleteTask = (id) => {
        let filteredTasks = tasks.filter(task => task.id !== id);

        setTasks(filteredTasks);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    }

    const clearTasks = () => {
        let filteredTasks = tasks.filter(task => task.progress !== 'Complete');

        setTasks(filteredTasks);
        localStorage.setItem('tasks', JSON.stringify(filteredTasks));
    }

    return (
        <section className={`task-dashboard ${theme ? theme : null}`}>
            <nav>
                <div onClick={toggleTaskView} className={taskView === 'current' ? 'active-page' : 'inactive-page'}>Current</div>
                <div onClick={toggleTaskView} className={taskView === 'complete' ? 'active-page' : 'inactive-page'}>Complete</div>
            </nav>
            {taskView === 'current'
            ? (
                <form>
                    <input value={taskInput} placeholder='Enter Task' onChange={e => setTaskInput(e.target.value)} />
                    <button onClick={e => addTask(e)}>Add</button>
                </form>
            )
            : null}
            <section className='todo-container'>
                {taskView === 'current'
                ? tasks?.filter(task => task.progress === 'Not Started' || task.progress === 'In Progress').map((task, i) => (
                    <TaskDisplay key={i} task={task} progressFn={updateProgress} deleteFn={deleteTask}/>
                ))
                : (
                   <div>
                        {tasks?.filter(task => task.progress === 'Complete').map((task, i) => (
                            <TaskDisplay key={i} task={task} progressFn={updateProgress} deleteFn={deleteTask}/>
                        ))}
                        <span className='clear-tasks' onClick={clearTasks}>Clear All</span>
                   </div> 
                )}
            </section>
        </section>
    )
}