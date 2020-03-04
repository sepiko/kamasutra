import React, { Component } from 'react';
import s from './Profile.module.css';

export default class Profile extends Component {
    render() {
        return (
            <div className={s.content}>
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
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
              </dix>
            </div>
          </div>
        )
    }
}
