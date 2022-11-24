import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";

let store = {
  _state: {
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Eugene" },
        { id: 2, name: "Anastasia" },
        { id: 3, name: "Illia" },
        { id: 4, name: "Slavik" },
      ],
      messages: [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" },
      ],
      newMessageBody: "",
    },
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 12 },
        { id: 2, message: "My first post", likesCount: 22 },
        { id: 3, message: "Hello there", likesCount: 222 },
      ],
      newPostText: "enter in it",
    },

    sideBar: {
      names: [
        { id: 1, message: "Nastya" },
        { id: 2, message: "Illia" },
        { id: 3, message: "Slavik" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this.callSubscriber = observer;
  },
  callSubscriber() {
    console.log("state changed");
  },
  dispatch(action) {
   this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
   this._state.profilePage = profileReducer(this._state.profilePage, action);
   this.callSubscriber(this._state)
  },
  
};
 export default store;
