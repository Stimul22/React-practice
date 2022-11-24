import React from "react";
import s from "./Post.module.css";

const Post = (props) => {  

  return <div>
      <div className={s.item}>
    <img src="https://t4.ftcdn.net/jpg/01/62/72/29/360_F_162722972_3SlhxozZGdL3rGuWgKyVP2NTs8POtX2n.jpg"/>
    {props.message}
    </div>
    <div>
    <span>Like</span> {props.likes}
    </div>
    </div>
};


export default Post;