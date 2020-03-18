import React, { Component } from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";
import {updateNewPostText} from "../../redux/state";


const Profile = props => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost} />
        </div>
    );
};

export default Profile;
