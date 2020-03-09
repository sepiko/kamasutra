import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './conponents/Header/Header';
import Navbar from './conponents/Navbar/Navbar';
import Profile from './conponents/Profile/Profile';
import Dialogs from './conponents/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';


const App = props => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
          <Route path='/profile' render={() => <Profile posts={props.posts} />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
