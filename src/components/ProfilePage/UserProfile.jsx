import React from 'react'
import UserIdentity from "./UserIdentity";
import UserPosts from "./UserPosts";

function UserProfile() {
    return (
       <div style={{backgroundColor:'#151e29',}}>
       <UserIdentity />
       <UserPosts />
       </div>
    )
}

export default UserProfile
