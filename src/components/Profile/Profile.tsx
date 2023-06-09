import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";


type ProfilePropsType = {
    posts: PostsType[]
}
export const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <div className={s.banner}>
                <img
                    src="https://as2.ftcdn.net/v2/jpg/04/99/56/39/1000_F_499563985_5epEZtgJYmAgVpxrcXrw8EyIjJM9ukmt.jpg"
                    alt={s.banner}/>
            </div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </>
    )
}