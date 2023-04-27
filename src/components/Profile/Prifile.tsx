import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <main className={s.main_block}>
            <div className={s.banner}>
                <img
                    src="https://as2.ftcdn.net/v2/jpg/04/99/56/39/1000_F_499563985_5epEZtgJYmAgVpxrcXrw8EyIjJM9ukmt.jpg"
                    alt={s.banner}/>
            </div>
            <div className={s.main_block_top}>
                <div className={s.avatar}>
                    <img
                        src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                        alt="avatar"/>
                </div>
                <div className={s.user_info}>
                    <div className={s.user_name}>Ivan, 21</div>
                </div>
            </div>
            <MyPosts/>
        </main>
    )
}