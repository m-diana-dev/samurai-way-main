import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Posts";
import {PostsType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostsType[]
}
export const MyPosts = (props: MyPostsPropsType) => {
    return (
        <>
            <div className={s.posts}>
                <div className={s.posts_title}>My Posts</div>
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>
            <div className={s.posts_items}>
                {props.posts.map(el=><Post key={el.id} id={el.id} text={el.text} likes={el.likes}/>)}
            </div>
        </>
    )
}