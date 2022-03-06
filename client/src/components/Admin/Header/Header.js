import React , {useState} from 'react';
import '../Main/Main.css';
import {NavLink} from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const Header = () =>{
    const [toggleFlag,setToggleFlag] = useState(false);
    const toggleLogoutOption = () =>{
        console.log('toggleLogoutOption');
        setToggleFlag(!toggleFlag);
    }
    return (
            <header>
                <span><AppsIcon/></span> 
                <span style={{position:'relative',cursor:'pointer'}}>
                 <AccountCircleIcon style={{fontSize:'30px'}} onClick={()=>toggleLogoutOption()}/>
                 {toggleFlag ? 
                    <ul className='logout_div'>
                        <li><AccountCircleIcon/><NavLink to="/admin/profile">My Profile</NavLink></li>
                        <li><ExitToAppIcon/><NavLink to="/admin/login">Logout</NavLink></li>
                    </ul>    
                : null}
                                 
                </span>
            </header>
    )
}

export default Header;