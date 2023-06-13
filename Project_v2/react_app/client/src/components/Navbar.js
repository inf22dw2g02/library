import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LoginButton from "./login";
import LogoutButton from "./logout";
import { Link } from 'react-router-dom';






const NavBar = ({ isAuthenticated, onLogin, onLogout, userName }) => {
  return (
    <div>
      <AppBar position="realative">
        <Toolbar>
          <div style={{ flexGrow: 1 }}></div> {/* Espaço em branco flexível */}
          {isAuthenticated ? (
            <>
              <Link to="/home" className="button">Home</Link>
              <Link to="/autores" className="button">Autores</Link>
              <Link to="/book" className="button">Books</Link>
              <LogoutButton onLogoutSuccess={onLogout} />
            </>
          ) : (
            <LoginButton onSuccess={onLogin} />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
