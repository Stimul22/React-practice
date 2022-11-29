const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAHiOf76ijbW8VSFsrnQIwR3_hqyHY5f45Q&usqp=CAU',
      fullName: "Eugene",
      followed: true,
      status: "I`m an engineer",
      location: { city: "Vinnitsa", country: "Ukraine" },
    },
    {
      id: 2,
      photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAHiOf76ijbW8VSFsrnQIwR3_hqyHY5f45Q&usqp=CAU',
      fullName: "Anastasia",
      followed: false,
      status: "I`m a lawyer",
      location: { city: "Vinnitsa", country: "Ukraine" },
    },
    {
      id: 3,
      photoUrl: 'https://memepedia.ru/wp-content/uploads/2016/03/large_p19d7nh1hm1i37tnuim11ebqo5c1.jpg',
      fullName: "Illia",
      followed: true,
      status: "I`m an programmer",
      location: { city: "Vinnitsa", country: "Ukraine" },
    },

  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    default:
      return state;
  }
};

export const followAC = (userId) => {
  
  return {
    type: FOLLOW, userId
  };
};
export const unfollowAC = (userId) => {
  return {
    type:  UNFOLLOW, userId
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default userReducer;
