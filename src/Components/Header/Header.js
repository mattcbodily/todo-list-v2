import React, {useState} from 'react';
import './Header.scss';

export default props => {
    let [username, setUsername] = useState(props.user.username || ''),
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
                <section className='username-flex'>
                    <p>Welcome, {props.user.username}</p>
                    <svg onClick={() => setEdit(true)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-2">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    </svg>
                </section>
            )}
        </header>
    )
}