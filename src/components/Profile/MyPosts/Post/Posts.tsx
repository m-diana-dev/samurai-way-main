import React from "react";
import s from './Posts.module.css'

type PostPropsType = {
    id: number
    text: string
    likes: number
}

export const Post = (props:PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.avatar}>
                <img
                    src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
                    alt="avatar"/>
            </div>
            <div className={s.post_content}>
                <div className={s.post_text}>{props.text}</div>
                <div className={s.post_like}>
                    <img src="https://icones.pro/wp-content/uploads/2021/04/icone-noire-violet.png" alt="like"/>
                    <span>{props.likes}</span>
                </div>
            </div>

        </div>
    )
}