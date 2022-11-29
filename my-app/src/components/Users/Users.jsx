import React from "react";
import styles from "./users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user) => <div key={user.id}>
            <span>
              <div >
                <img className={styles.avatar} alt='avatar' src={user.photoUrl} />
              </div>
              <div>
                 {user.followed
                ? <button onClick={() => props.unfollow(user.id)}>unfollow</button>  
                : <button onClick={() => props.follow(user.id)}>Follow</button>}
              </div>
            </span>
            <span>
              <span>
                <div>{user.fullName}</div>
                <div> {user.status}</div>
              </span>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </div>
        
      )}
    </div>
  );
};

export default Users;
