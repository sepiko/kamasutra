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

let dialogsData = [
    {id: 1, name: 'Myron'},
    {id: 2, name: 'Danya'},
    {id: 3, name: 'Zoriana'},
    {id: 4, name: 'Patik'},
    {id: 5, name: 'Ryba'}
]

let messagesData = [
    {id:1 , message: 'We just released a massive, free Python Machine Learning course focused on TensorFlow 2.0.'},
    {id:2 , message: 'How to avoid getting your password cracked.'},
    {id:3 , message: 'The JavaScript Beginner\'s Handbook - 2020 Edition.'},
    {id:4 , message: 'Quote of the Week: “Optimism is an occupational hazard of programming.'}
]

const Dialogs = props => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}  />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}  />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}  />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}  />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}  />
            </div>
            <div className={s.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message} />
                <Message id={messagesData[1].id} message={messagesData[1].message} />
                <Message id={messagesData[2].id} message={messagesData[2].message} />
                <Message id={messagesData[3].id} message={messagesData[3].message} />
            </div>
        </div>
    );
};

export default Dialogs;
