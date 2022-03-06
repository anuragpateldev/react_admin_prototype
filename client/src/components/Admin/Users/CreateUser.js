import React from 'react';
import Breadcrumbs from '../Main/Breadcrumbs';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import './CreateUser.css';
import AddUserForm from './Form/AddUserForm';


const CreateUser = () =>{
    return (
            <>
                <Sidebar/>
                <div className='Main_wrapper'>
                    <Header/>
                    <div className='Reactjs__wrapper'>
                        <Breadcrumbs pageTitle="User" />
                        <AddUserForm/>
                    </div>
                </div>
            </>
    ) 
}
export default CreateUser;