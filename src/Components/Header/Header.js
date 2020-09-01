import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import mainIcon from '../../assets/todo-list-v2.svg';
import './Header.scss';

export default props => {
    let [username, setUsername] = useState(''),
        [edit, setEdit] = useState(false);

    useEffect(() => {
        let storedName = localStorage.getItem('username');
        if(storedName){
            setUsername(storedName);
        } else {
            setEdit(true);
        }
    }, [])

    const addUsername = () => {
        localStorage.setItem('username', username);
        setEdit(false);
    }

    return (
        <header>
            <section className='icon-flex'>
                <img src={mainIcon} alt='To Do List' className='app-icon'/>
                <p>Doist</p>
            </section>
            {edit
            ? (
                <section className='username-flex'>
                    <input className='username-input' value={username} placeholder='Add Username' onChange={e => setUsername(e.target.value)}/>
                    <button className='username-btn' onClick={addUsername}>Add</button>
                </section>
            )
            : (
                <section className='username-flex'>
                    <p>Welcome, {username}</p>
                    <Link to='/settings' className='nav-links'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                    </Link>
                </section>
            )}
        </header>
    )
}