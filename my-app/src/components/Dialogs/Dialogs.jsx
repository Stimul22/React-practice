import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsData = state.dialogs.map((d) => {
    return (
        <DialogItem name={d.name} key={d.id} id={d.id} />
    );
  });

  let messagesData = state.messages.map((m) => {
    return <Message message={m.message} key={m.id} id={m.id} />;
  });

  let newMessageBody = state.messages.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };

  let onNewMessageChange = (event) => {

    let body = event.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogsData}</div>
      <div className={s.messages}>
        {messagesData}
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          />
        </div>
        <div>
          <button onClick={onSendMessageClick}>add message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
