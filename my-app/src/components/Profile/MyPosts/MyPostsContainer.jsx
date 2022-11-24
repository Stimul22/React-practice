import React from "react";
import { connect } from "react-redux";
import { updateNewPostTextActionCreator, addPostActionCreator } from "../../../redux/Profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
// let state = props.store.getState();

//   let onAddPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   const onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);
//     props.store.dispatch(action);
//   };

//   return <MyPosts updateNewPostText={onPostChange}
//   addPost={onAddPost}
//   posts={state.profilePage.posts}
//   newPostText={state.profilePage.newPostText}/>
// };


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchToProps = (dispatch) => {
  
 return {
  addPost: () => {
  dispatch(addPostActionCreator())
  },
  updateNewPostText: (text) => {
    let action = updateNewPostTextActionCreator(text);
    dispatch(action);
  }
 }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;






