import React from 'react';
import Breadcrumbs from '../Main/Breadcrumbs';
import './ManageUsers.css';
import ManageUsersTable from './Table/ManageUsersTable';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import  { Table } from 'react-bootstrap';

const ManageUsers = () =>{
    return (
        <>
            <Sidebar/>
            <div className='Main_wrapper'>
                <Header/>
                <div className='Reactjs__wrapper'>
                    <Breadcrumbs pageTitle="Users" />
                    <ManageUsersTable/>
                </div>
            </div>
        </>
    )
}
 
export default ManageUsers;