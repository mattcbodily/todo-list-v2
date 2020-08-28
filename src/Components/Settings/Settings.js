import React from 'react';
import './Settings.scss';

export default props => {
    return (
        <div className='settings'>
            <h2>Settings</h2>
            <label className='switch'>
                <input type="checkbox" />
                <span className="slider round"></span>
            </label>
        </div>
    )
}