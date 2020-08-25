import React, {useState} from 'react';
import './Header.css';

export default props => {
    let [username, setUsername] = useState(props.user.username),
        [edit, setEdit] = useState(false);

    const addUsername = () => {
        let userCopy = {...props.user, username};

        props.userSetFn(userCopy);
        localStorage.setItem('userObj', JSON.stringify(userCopy));
        setEdit(false);
    }

    return (
        <header>
            <img src='https://i.kym-cdn.com/photos/images/original/001/516/899/f31.jpg' alt='To Do List' className='app-icon'/>
            {!props.user.username || edit
            ? (
                <section>
                    <input value={username} placeholder='Add Username' onChange={e => setUsername(e.target.value)}/>
                    <button onClick={addUsername}>Submit</button>
                </section>
            )
            : (
                <section>
                    <p>Welcome, {props.user.username}</p>
                    <button onClick={() => setEdit(true)}>Change Username</button>
                </section>
            )}
        </header>
    )
}