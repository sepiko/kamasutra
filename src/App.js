import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" />
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://www.dw.com/image/48396304_303.jpg' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            new post
          </div>
          <dix>
            <div>post1</div>
            <div>post2</div>
          </dix>
        </div>
      </div>

    </div>
  );
}

export default App;
