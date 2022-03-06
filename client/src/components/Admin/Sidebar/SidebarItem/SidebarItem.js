import React ,{useState} from 'react';
import './SidebarItem.css';
import {NavLink} from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const SidebarItem = ({name,Icon,apUrl,arrowStatus,item_child}) =>{
    const [arrowToggleflag,setArrowToggleFlag] = useState(false);
    const toggleArrowState = () =>{
        console.log('toggleArrowState');
        setArrowToggleFlag(!arrowToggleflag);
    }

    return (
        <div className='sidebar_item_wrapper'>
            <div className='sidebar__item_c'>
                <div className="side__menu_item"> 
                    <Icon className='sidebar__icon'/>
                    <NavLink to={apUrl}>{name}</NavLink> 
                    {arrowToggleflag ? 
                        arrowStatus ? <KeyboardArrowDownIcon onClick={()=>toggleArrowState()}  className='sidebar__icon'/> : <KeyboardArrowDownIcon  className='sidebar__icon'  style={{visibility:'hidden'}}/>
                    : 
                        arrowStatus ? <ChevronRightIcon onClick={()=>toggleArrowState()}  className='sidebar__icon'/> : <ChevronRightIcon  className='sidebar__icon'  style={{visibility:'hidden'}}/>
                    }
                    
                </div>
                {arrowToggleflag ?
                    arrowStatus ? 
                    <ul className="side__menu_item_child">
                        {item_child.map( (currEle,index)=>(
                            <li key={`index_${index}`}><NavLink to={currEle.url} className='sidebar__item'>- {currEle.name}</NavLink></li>
                        ))}
                    </ul>
                    : null
                 : null}
            </div>
        </div>
    )
}

export default SidebarItem;