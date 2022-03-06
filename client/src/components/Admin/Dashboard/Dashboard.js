import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import {NavLink} from 'react-router-dom';
import DashboardCard from './DashboardCard/DashboardCard';
import SwitchCameraIcon from '@material-ui/icons/SwitchCamera';
 
const Dashboard = () =>{
    return (
            <>
                <Sidebar/>
                <div className='Main_wrapper'>
                    <Header/>
                        <div className='dashboard_wrapper'>
                            <DashboardCard/>
                            <DashboardCard/>
                            <DashboardCard/>
                            <DashboardCard/>
                            <DashboardCard/>
                        </div>
                </div>
            </>
    );
}

export default Dashboard;