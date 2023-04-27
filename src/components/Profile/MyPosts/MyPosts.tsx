import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Posts";

export const MyPosts = () => {
    return (
        <>
            <div className={s.posts}>
                <div className={s.posts_title}>My Posts</div>
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>
            <div className={s.posts_items}>
                <Post text={'Hello!'} likes={12}/>
                <Post text={'Hello! Hello!'} likes={1}/>
                <Post text={'Hello! Hello! Hello!'} likes={8}/>
            </div>
        </>
    )
}