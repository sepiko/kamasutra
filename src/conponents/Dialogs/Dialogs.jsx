import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = props => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="Myron" id="1" />
                <DialogItem name="Dania" id="2" />
                <DialogItem name="Zoriana" id="3" />
                <DialogItem name="Patik" id="4" />
                <DialogItem name="Ryba" id="5" />
            </div>
            <div className={s.messages}>
                <Message message="Hi how are you?" />
                <Message message="I'am fine" />
                <Message message="And you?" />
            </div>
        </div>
    );
};

export default Dialogs;
