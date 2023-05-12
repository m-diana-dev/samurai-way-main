import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogsItemPropsType = {
    id: number
    name: string
}
export const DialogsItem = (props: DialogsItemPropsType) => {
    return (
        <li>
            <NavLink to={"/messages/" + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </li>
    )
}