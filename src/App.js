import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header/Header';
import Navbar from './conponents/Navbar/Navbar';
import Profile from './conponents/Profile/Profile';
import Dialogs from './conponents/Dialogs/Dialogs';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
      <Profile />
      </div>
    </div>
  );
}

export default App;
