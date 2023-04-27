import React from "react";
import s from './Navbar.module.css'

export const Navbar = () => {
    return (
        <aside className={s.aside}>
            <ul>
                <li><a href="" className={`${s.item} ${s._active}`}>Profile</a></li>
                <li><a href="" className={s.item}>Messages</a></li>
                <li><a href="" className={s.item}>News</a></li>
                <li><a href="" className={s.item}>Music</a></li>
            </ul>
        </aside>
    )
}