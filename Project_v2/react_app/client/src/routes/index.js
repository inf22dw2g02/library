import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
// import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import {AutoresPage, AutorPageId}  from '../components/autoresPage';


const RoutesApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/autores" element={<AutoresPage />} />
        <Route path="/autores/:id" element={<AutorPageId />} />
        {/* <PrivateRoute path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  );
};

export default RoutesApp;
