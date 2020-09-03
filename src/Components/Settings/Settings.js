import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {ThemeContext} from '../../App';
import './Settings.scss';

export default props => {
    let {theme, toggleTheme} = useContext(ThemeContext);

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
            <Link className={`home-link ${theme}`} to='/'>Go Back Home</Link>
        </div>
    )
}