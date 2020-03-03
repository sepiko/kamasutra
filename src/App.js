import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header';
import Navbar from './conponents/Navbar';
import Profile from './conponents/Profile';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
