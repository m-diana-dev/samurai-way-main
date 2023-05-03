import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemPropsType={
    id: number
    name: string
}
type MessageItemPropsType={
    side: string
    text: string
}
const DialogsItem = (props:DialogsItemPropsType) => {
    return (
        <li>
            <NavLink to={"/messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}
const MessageItem = (props:MessageItemPropsType) => {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_wrapp}>
                <div className={s.dialogs_items}>
                    <h1>Dialogs</h1>
                    <ul>
                        <DialogsItem id={1} name={'Ivan 1'}/>
                        <DialogsItem id={2} name={'Ivan 2'}/>
                        <DialogsItem id={3} name={'Ivan 3'}/>
                        <DialogsItem id={4} name={'Ivan 4'}/>
                    </ul>
                </div>
                <div className={s.message_items}>
                    <MessageItem side={'left'} text={'Hi'}/>
                    <MessageItem side={'right'} text={'Hi'}/>
                    <MessageItem side={'left'} text={'Vulputate imperdiet platea quis, dictum morbiex.'}/>
                    <MessageItem side={'left'} text={'Urna morbi pellentesque et eget est. Sodales justo mauris id amet amet, in et vitae molestie venenat'}/>
                    <MessageItem side={'right'} text={'Urna morbi pellentesque et eget est. Sodales justo mauris id amet amet, in et vitae molestie venenat'}/>
                </div>
            </div>
        </div>
    )
}