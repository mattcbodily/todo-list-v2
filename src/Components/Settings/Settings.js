import React, {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../../App';
import {UserContext} from '../../App';
import './Settings.scss';

export default props => {
    let [nameInput, setNameInput] = useState(''),
        [editView, setEditView] = useState(false);

    let {theme, toggleTheme} = useContext(ThemeContext),
        {username, changeUsername} = useContext(UserContext);

    useEffect(() => {
        setNameInput(username)
    }, [username])

    const editUsername = () => {
        changeUsername(nameInput);
        setEditView(false);
    }

    return (
        <div className={`settings ${theme ? theme : null}`}>
            <h2>Settings</h2>
            <section className='dark-mode-flex'>
                <p>Dark Mode</p>
                <label className='switch'>
                    <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'}/>
                    <span className="slider round"></span>
                </label>
            </section>
            <section className='dark-mode-flex'>
                <p>Edit Username</p>
                {editView
                ? (
                    <>
                        <input className='edit-username-input' value={nameInput} onChange={e => setNameInput(e.target.value)}/>
                        <button className='edit-username-btn' onClick={editUsername}>Edit</button>
                    </>
                )
                : <span onClick={() => setEditView(true)}>{username}</span>}
            </section>
            <Link className={`home-link ${theme}`} to='/'>Go Back Home</Link>
        </div>
    )
}