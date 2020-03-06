import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export default class MyPosts extends Component {
    render() {
        return (
            <div>
                <div className={s.postsBlock}>
                    <h3>My posts</h3>
                </div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi, my name is Bob' />
                    <Post message='I invite you to the party' />
                </div>
            </div>
        )
    }
}

