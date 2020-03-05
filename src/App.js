import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header/Header';
import Navbar from './conponents/Navbar/Navbar';
import Profile from './conponents/Profile/Profile';
import Dialogs from './conponents/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'component={Dialogs} />
          <Route path='/profile' component={Profile} />
          <Route path='/news' component={Dialogs} />
          <Route path='/music' component={Profile} />
          <Route path='/settings' component={Dialogs} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
