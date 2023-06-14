import './App.css';
import { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import React from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import Book from './components/Book';
import { AutoresPage } from './components/autoresPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './routes/PrivateRoute';


const clientId = '89846874244-4rl59hshpt44k64ontkslptsit9jmilq.apps.googleusercontent.com';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  const handleLogin = (name) => {
    setIsAuthenticated(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
  };

  return (
    <Router>
      <div className="App">
        {SignIn ? <Navbar isAuthenticated={isAuthenticated || !SignIn} onLogin={handleLogin} onLogout={handleLogout} userName={userName} />: <Navbar isAuthenticated={isAuthenticated || !SignIn} onLogin={handleLogin} onLogout={handleLogout} userName={userName} />}
        <Routes>
          <Route path="/" element={!isAuthenticated ? <SignIn /> : null} />
          <Route path="/home" element={isAuthenticated || SignIn? <HomePage /> : null} />
          <Route path="/book" element={isAuthenticated || SignIn? <Book /> : null} />
          <Route path="/autores" element={isAuthenticated || SignIn? <AutoresPage /> : null} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
