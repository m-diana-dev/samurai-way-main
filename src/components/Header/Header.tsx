import React from "react";
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className="container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/1024px-Android_O_Preview_Logo.png" alt="logo"/>
            </div>
        </header>
    )
}