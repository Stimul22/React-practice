import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "D:/ReactLearning/my-app/src/common/Preloaders/Preloader.jsx";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"></img>
      </div>
      <div className={s.descriptionBlock}>
        <div>{props.profile.fullName}</div>
        <div className={s.avatar}>
          <img src={props.profile.photos.small} alt="userAvatar" />
        </div>
        <div className={s.about}>
          {props.profile.aboutMe}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
