import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogItems}>
        <div className={s.dialog + " " + s.active}>Myron</div>
        <div className={s.dialog}>Zoriana</div>
        <div className={s.dialog}>Mykola</div>
        <div className={s.dialog}>Dania</div>
        <div className={s.dialog}>Patik</div>
        <div className={s.dialog}>Ryba</div>
        <div className={s.dialog}>Liana</div>
      </div>
      <div className={s.messages}>
        <div className={s.dialog}>Pryvit</div>
        <div className={s.dialog}>Reakt tse kryto</div>
        <div className={s.dialog}>Pyshka-raketa</div>
      </div>
    </div>
  );
};

export default Dialogs;
