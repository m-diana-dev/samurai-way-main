import React from "react";
import s from './../Dialogs.module.css'

export type MessageItemPropsType = {
    side: string
    text: string
}
export const MessageItem = (props: MessageItemPropsType) => {
    return (
        <div className={props.side === 'left' ? s.message + ' ' + s.left : s.message + ' ' + s.right}>{props.text}</div>
    )
}