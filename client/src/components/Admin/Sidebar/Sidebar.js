import React , {useState} from 'react';
import './Sidebar.css';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import HomeIcon from '@material-ui/icons/Home';
import ComputerIcon from '@material-ui/icons/Computer';
import { NavLink } from 'react-router-dom';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SidebarItem from './SidebarItem/SidebarItem';
 
const Sidebar  = () =>{
    const [sidebarItem,setSidebarItem] = useState();
    return (
        <div className='Sidebar_wrapper'>
                <div className="logo">
                    <AccountCircleIcon/>
                </div>
                <div className="side__menu">

                    <SidebarItem name="Dashboard" Icon={ComputerIcon} apUrl="/dashboard" arrowStatus={false}/>
                    
                    {/******** Users js Start ********/}
                    <SidebarItem name="User" Icon={ListAltIcon} apUrl="/admin" arrowStatus={true} item_child={[{name:'Create User',url:'/admin/create_user'
                    },{name:'Manage User',url:'/admin/manage_users'}]}/>
                    {/******** Users js End ********/}

                </div>
        </div>
    )
}

export default Sidebar;