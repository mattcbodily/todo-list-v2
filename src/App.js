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
        currentTasks: [],
        completedTasks: [],
        theme: ''
      });

      localStorage.setItem('userObj', JSON.stringify({
        username: '',
        currentTasks: [],
        completedTasks: [],
        theme: ''
      }));
    } else {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  return (
    <div className="App">
      <Header user={user} userSetFn={setUser}/>
      <TaskDashboard />
    </div>
  );
}

export default App;
