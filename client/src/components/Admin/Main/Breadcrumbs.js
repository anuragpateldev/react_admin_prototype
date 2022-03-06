import React from 'react';
import { NavLink } from 'react-bootstrap';
import './Breadcrumbs.css';
import HomeIcon from '@material-ui/icons/Home';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Breadcrumbs = (props) => {
    return (
        <div className="Bread__page_header">
            <div className="Bread__page_title">
                <h3>Manage {props.pageTitle}</h3>
                <div className="Bread__crumbs">
                    <ul id="Bread__breadcrumbs" className="Bread__breadcrumb">
                        <li><NavLink to="/dashboard"><HomeIcon/><ChevronRightIcon/></NavLink></li>
                        <li className="brecheck"> <span> {props.pageTitle} </span> <ChevronRightIcon/></li>
                        <li className="active"><NavLink to="/"><span>Manage {props.pageTitle}</span></NavLink> </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Breadcrumbs;