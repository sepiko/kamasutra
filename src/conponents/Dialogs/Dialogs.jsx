import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message.jsx"
import DialogItem from "./DialogItem/DialogItem.jsx"


const Dialogs = props => {


    let dialogs = [
        { id: 1, name: 'Myron' },
        { id: 2, name: 'Danya' },
        { id: 3, name: 'Zoriana' },
        { id: 4, name: 'Patik' },
        { id: 5, name: 'Ryba' }
    ]

    let messages = [
        { id: 1, message: 'We just released a massive, free Python Machine Learning course focused on TensorFlow 2.0.' },
        { id: 2, message: 'How to avoid getting your password cracked.' },
        { id: 3, message: 'The JavaScript Beginner\'s Handbook - 2020 Edition.' },
        { id: 4, message: 'Quote of the Week: “Optimism is an occupational hazard of programming.' }
    ]


    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message id={m.id} message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;
