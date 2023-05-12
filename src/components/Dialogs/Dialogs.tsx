import React from "react";
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogItem/DialogItem";
import {MessageItem} from "./Messages/Messages";
import {DialogsType, MessagesType} from "../../redux/state";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export const Dialogs = (props: DialogsPropsType) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_wrapp}>
                <div className={s.dialogs_items}>
                    <h1>Dialogs</h1>
                    <ul>
                        {props.dialogs.map(el => <DialogsItem key={el.id} id={el.id} name={el.name}/>)}
                    </ul>
                </div>
                <div className={s.message_items}>
                    {props.messages.map(el => <MessageItem key={el.id} side={el.side} text={el.text}/>)}
                </div>
            </div>
        </div>
    )
}