import React from 'react';
import SignUp from '../pages/Register/SignupPage/signUp';
import LogIn from '../pages/Register/LoginPage/logIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home/homepage';
// import Dashboard from '../pages/Dashboard/Dashboard';
// import AboutUs from '../pages/AboutUs/AboutUs';
// import Home from '../pages/Home/Home';
import NoPage from '../pages/Error/NoPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
          {/* <Route path='/aboutus' element={<AboutUs />} /> */}
          <Route path='*' element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
