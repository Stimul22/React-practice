import React from "react";
import { connect } from "react-redux";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";


// const DialogsContainer = (props) => {
//   let state = props.store.getState().dialogsPage;

//   let onSendMessageClick = () => {
//     props.store.dispatch(sendMessageCreator());
//   };

//   let onNewMessageChange = (body) => {
//     props.store.dispatch(updateNewMessageBodyCreator(body));
//   };

//   return (
//     <Dialogs
//     // sendMessage={onSendMessageClick}
//     // updateNewMessageBody={onNewMessageChange}
//     // dialogsPage={state}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    updateNewMessageBody: (body) => {
      
      dispatch(updateNewMessageBodyCreator(body));
    },
  };
};

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
