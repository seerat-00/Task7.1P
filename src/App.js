import React, { useEffect, useState } from 'react';
import Login from './login';
import SignUp from './signup';
import NavBAR from './navbar';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import Profile from './profile';
import {auth } from "./firebase.jsx";
import "./App.css";


function App() {
  const [user, setUser] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user);
    });
  });

  return (
    <Router>
      <div className='container'>
        <NavBAR />
        <div className='app'>
          <Routes>
            <Route 
              path='/' element={user ? <Link to="/profile" /> : <Login />} 
            />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/profile' element={<Profile />} />
          </Routes>
          <ToastContainer />
        </div>
      </div>
    </Router>
  );
}

export default App;
