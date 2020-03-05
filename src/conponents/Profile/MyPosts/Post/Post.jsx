import s from "./Post.module.css";
import React from "react";

const Post = props => {
  return (
    <div className={s.item}>
      <img
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/imgonline-com-ua-FrameBlurred-_14-770x433.jpeg?b9RaYEEvetkLvroGBpGaOwg7vTih1Msj.jpg"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
