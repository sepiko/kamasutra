import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message.jsx"
import DialogItem from "./DialogItem/DialogItem.jsx"


const Dialogs = props => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message id={m.id} message={m.message} />);

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
