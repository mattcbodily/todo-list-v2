import React, {useState, useEffect} from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import './App.scss';

function App() {
  // useEffect(() => {

  // }, [])

  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  );
}

export default App;