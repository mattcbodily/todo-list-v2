import React, {useContext} from 'react';
import {ThemeContext} from '../../App';
import './Settings.scss';

export default props => {
    let {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className={`settings ${theme ? theme : null}`}>
            <h2>Settings</h2>
            <label className='switch'>
                <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'}/>
                <span className="slider round"></span>
            </label>
        </div>
    )
}