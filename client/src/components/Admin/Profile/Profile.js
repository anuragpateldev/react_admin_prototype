import React from 'react';
import Breadcrumbs from '../Main/Breadcrumbs';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import ProfileBgImg from '../Profile/ProfileBgImg/ProfileBgImg';
import './Profile.css';
import avatarImg from '../../../img/avatar.png';
import BackupIcon from '@material-ui/icons/Backup';


const Profile = () => {
    return (
        <>
            <Sidebar/>
            <div className='Main_wrapper'>
                <Header/>
                <div className='Profile__wrapper'>
                    <Breadcrumbs pageTitle="Profile" />
                    <ProfileBgImg/>
                    <div className='Profile_form_wrapper'>
                        <div className='Profile_btn_group'>
                            <button className='profile_btns profile_active_btns'>Edit Profile</button>
                            <button className='profile_btns'>Edit Password</button>
                        </div>

                        <div className='Profile_edit_form'>
                            <div className='Profile__img_box'>
                                 <h3>Edit Profile</h3>
                                <div className='Profile__img_box_child'>
                                    <img src={avatarImg}/>
                                </div>
                                <div className='profile__upload_picture_div'>
                                    <BackupIcon/><span>Upload Picture</span>
                                </div>
                            </div>
                            <div className='Profile__form'></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;