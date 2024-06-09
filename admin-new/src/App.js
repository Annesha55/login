// App.js
import React from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Logout from './components/Logout';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar darkMode={darkMode} onDarkModeToggle={toggleDarkMode} />
        <div style={{ padding: '20px' }}>
          {isLoggedIn ? (
            <Logout onLogout={handleLogout} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
