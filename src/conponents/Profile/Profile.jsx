import React, { Component } from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

export default class Profile extends Component {
    render() {
        return (
            <div className={s.content}>
                <div>
                    <img src='https://www.dw.com/image/48396304_303.jpg' alt='bcgrnd'/>
                </div>
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
        )
    }
}
