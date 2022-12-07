import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./users.module.css";
import userPhoto from "D:/ReactLearning/my-app/src/photos/UserPh.jpg";
import axios from "axios";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = Array.from(
    { length: pagesCount > 10 ? 10 : pagesCount },
    (_, i) => i + 1
  );

  return (
    <div>
      <div>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page ? styles.selectedPage : ""}
              onClick={() => props.onPageChanged(page)}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink to={`/profile/${user.id}`}>
                <img className={styles.avatar} alt="avatar" src={userPhoto} />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    usersAPI.inUnFollow(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.unfollow(user.id);
                      }
                    });
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    usersAPI.inFollow(user.id).then((data) => {
                      if (data.resultCode === 0) {
                        props.follow(user.id);
                      }
                    });
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div> {user.status}</div>
            </span>
          </span>
          <span>
            <div>{"Ukraine"}</div>
            <div>{"Vinnitsia"}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
