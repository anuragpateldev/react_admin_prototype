import React from 'react';
import './ProfileBgImg.css';
import avatarImg from '../../../../img/avatar.png';
const ProfileBgImg = () => {
    return (
        <>
            <div className='Profile_bg_img'></div>
            <div className='Profile_and_title'>
                <img src={avatarImg}/>
                <p>Admin Profile</p>
            </div>
        </>
    )
}

export default ProfileBgImg;