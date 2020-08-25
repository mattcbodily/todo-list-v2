import React, {useState, useEffect} from 'react';
import Header from './Components/Header/Header';
import TaskDashboard from './Components/TaskDashboard/TaskDashboard';
import './App.css';

function App() {
  let [user, setUser] = useState({});

  useEffect(() => {
    const storedUser = localStorage.getItem('userObj');

    if(!storedUser){
      setUser({
        username: '',
        tasks: [],
        theme: ''
    });

      localStorage.setItem('userObj', JSON.stringify({
        username: '',
        tasks: [],
        theme: ''
      }));
    } else {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  console.log(user)
  return (
    <div className="App">
      <Header user={user} userSetFn={setUser}/>
      <TaskDashboard user={user} userSetFn={setUser}/>
    </div>
  );
}

export default App;
