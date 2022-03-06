import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './WebsiteRoute.css';

import ANavbar from './Navbar/ANavbar';
import Home from './Home/Home';
import About from './About/About';
//website__parent

const WebsiteRoute = () =>{
    return (
        <div class="website__parent">
            <ANavbar/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            </Switch>
        </div>
    )
}

export default WebsiteRoute;