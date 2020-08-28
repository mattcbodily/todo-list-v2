import React, {useState, useEffect} from 'react';
import Header from './Components/Header/Header';
import routes from './routes';
import './App.scss';

export const ThemeContext = React.createContext(null);

function App() {
  let [theme, setTheme] = useState('');

  useEffect(() => {
    getStoredTheme();
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

  const toggleTheme = () => {
    console.log('hit')
    if(theme === 'light'){
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else if(theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className={`App ${theme ? theme : null}`}>
        <Header />
        {routes}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;