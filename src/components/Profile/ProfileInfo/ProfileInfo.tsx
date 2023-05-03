import s from "./ProfileInfo.module.css"
import React from "react";

export const ProfileInfo = () => {
    return (
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
    )
}