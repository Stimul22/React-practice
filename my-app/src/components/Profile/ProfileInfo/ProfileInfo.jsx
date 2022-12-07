import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./ProfileInfo.module.css";
import Preloader from "D:/ReactLearning/my-app/src/common/Preloaders/Preloader.jsx";
import userAvatar from "../../../photos/UserPh.jpg";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"></img>
      </div>
      <div className={styles.descriptionBlock}>
        <div>{props.profile.fullName}</div>
        <div className={styles.avatar}>
          <img
            src={props.profile.photos.small ?? userAvatar}
            alt="userAvatar"
          />
        </div>
        <div className={styles.about}>{props.profile.aboutMe ?? `There is nothing here`}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
