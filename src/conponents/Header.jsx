import React, { Component } from "react";
import s from './Header.module.css';

export default class Header extends Component {
  render() {
    return (
        <header className={s.header}>
          <img src="http://logok.org/wp-content/uploads/2014/05/Total-logo-earth-880x660.png" />
        </header>
    );
  }
}
