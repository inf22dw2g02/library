import logo from './logo.svg';
import './App.css';
import  LoginButton from "./components/login";
import  LogoutButton from "./components/logout";
import { useEffect } from 'react';
import { gapi}  from  'gapi-script';

const clientId = '89846874244-4rl59hshpt44k64ontkslptsit9jmilq.apps.googleusercontent.com';

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  });


  // var accessToken = gapi.auth.getToken().accessToken; ### Para ter o acces token para a api



  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
