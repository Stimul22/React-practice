import React from "react";
import { NavLink } from "react-router-dom";
import s from './../Dialogs.module.css'

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
  
    return (
      <div className={s.dialog}>
        {/* <img src="https://iconarchive.com/download/i106842/goodstuff-no-nonsense/free-space/astronaut-helmet.ico"/> */}
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    );
  };

  export default DialogItem;