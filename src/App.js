import React, {useState, useEffect} from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import './App.scss';

function App() {
  // let [user, setUser] = useState({});

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('userObj');

  //   if(!storedUser){
  //     setUser({
  //       username: '',
  //       tasks: [],
  //       theme: ''
  //   });

  //     localStorage.setItem('userObj', JSON.stringify({
  //       username: '',
  //       tasks: [],
  //       theme: ''
  //     }));
  //   } else {
  //     setUser(JSON.parse(storedUser))
  //   }
  // }, [])

  return (
    <div className="App">
      <Header />
      {/* {routes} */}
    </div>
  );
}

export default App;
