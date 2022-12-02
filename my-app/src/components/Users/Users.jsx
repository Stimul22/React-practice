import React from "react";
import styles from "./users.module.css";
import userPhoto from "D:/ReactLearning/my-app/src/photos/UserPh.jpg";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (pages.length < 10) {
      pages.push(i);
    }
  }

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
              <img className={styles.avatar} alt="avatar" src={userPhoto} />
            </div>
            <div>
              {user.followed ? (
                <button onClick={() => props.unfollow(user.id)}>
                  {" "}
                  unfollow{" "}
                </button>
              ) : (
                <button onClick={() => props.follow(user.id)}>Follow</button>
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
