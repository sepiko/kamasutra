import React, { Component } from 'react';
import s from './Post.module.css';

export default class Post extends Component {
    render() {
        return (
                    <div className={s.item}>
                    <img src='https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg?b9RaYEEvetkLvroGBpGaOwg7vTih1Msj.jpg' alt='avatar'/>
                    post2
                    <div>
                        <span>Like</span>
                    </div>
                    </div>
        )
    }
}
