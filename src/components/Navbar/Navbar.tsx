import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <aside className={s.aside}>
            <ul>
                <li className={s._active}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s._active}><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></li>
                <li className={s._active}><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li className={s._active}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
            </ul>
        </aside>
    )
}