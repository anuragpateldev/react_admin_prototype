import React from 'react';
import './DashboardCard.css';
import {NavLink} from 'react-router-dom';
import SwitchCameraIcon from '@material-ui/icons/SwitchCamera';

const DashboardCard = () =>{
    return (
        <div className='dashboard__card'>
            <div className='dashboard__card_child'>
                <div className='dashboard__card_icon'>
                    <SwitchCameraIcon/>
                </div>
                <div className='dashboard__card_head'>
                    <p>React Week</p>
                    <p><NavLink to="/admin">99</NavLink></p>
                </div>
            </div>
            <div className='dashboard__card_child'>
                <p className='dashboard__card_para'>Week Report</p>
            </div>
        </div>
    );
}

export default DashboardCard;