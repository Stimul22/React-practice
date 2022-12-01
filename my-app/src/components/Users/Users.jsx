import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "D:/ReactLearning/my-app/src/photos/UserPh.jpg";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.totalUsersCount}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=100}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );
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
                className={
                this.props.currentPage === page ? styles.selectedPage: ''}
                onClick={() => this.onPageChanged(page)}>{page}</span>
            );
          })}
        </div>
        {this.props.users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img className={styles.avatar} alt="avatar" src={userPhoto} />
              </div>
              <div>
                {user.followed ? (
                  <button onClick={() => this.props.unfollow(user.id)}>
                    {" "}
                    unfollow{" "}
                  </button>
                ) : (
                  <button onClick={() => this.props.follow(user.id)}>
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
  }
}

export default Users;
