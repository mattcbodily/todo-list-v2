import React, {useState, useEffect} from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import './App.scss';

export const ThemeContext = React.createContext(null);
export const UserContext = React.createContext(null);

function App() {
  let [theme, setTheme] = useState(''),
      [username, setUsername] = useState('');

  useEffect(() => {
    getStoredTheme();
    getStoredUsername();
  }, [])

  const getStoredTheme = () => {
    let userTheme = localStorage.getItem('theme');

    if(!userTheme){
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme(userTheme);
    }
  }

  const getStoredUsername = () => {
    let storedUsername = localStorage.getItem('username');

    if(!storedUsername){
      setUsername('')
      localStorage.setItem('username', '');
    } else {
      setUsername(storedUsername)
    }
  }

  const toggleTheme = () => {
    if(theme === 'light'){
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if(theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  const changeUsername = (val) => {
    setUsername(val);
    localStorage.setItem('username', val);
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <UserContext.Provider value={{username, changeUsername}}>
      <div className={`App ${theme ? theme : null}`}>
        <Header />
        {routes}
      </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;