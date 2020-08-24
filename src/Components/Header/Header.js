import React, {useState, useEffect} from 'react';
import './Header.css';

export default props => {
    let [username, setUsername] = useState(props.user.username);

    const addUsername = () => {
        
    }

    return (
        <header>
            <img src='https://i.kym-cdn.com/photos/images/original/001/516/899/f31.jpg' alt='To Do List' className='app-icon'/>
            {username
            ? (
                <section>
                    <p>Welcome Back, ${username}</p>
                    <button>Change Username</button>
                </section>
            )
            : (
                <section>
                    <input value={username} placeholder='Add Username' onChange={e => setUsername(e.target.value)}/>
                    <button>Submit</button>
                </section>
            )}
        </header>
    )
}