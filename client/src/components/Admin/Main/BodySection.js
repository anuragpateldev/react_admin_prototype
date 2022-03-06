import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import CreateReactjs from './CreateReactjs';
import ManageReactjs from './ManageReactjs';
import Login from './Login';


const BodySection = () =>{
    return (
        <div className='body__sections'>
            <Switch>
                <Route path = '/' exact component={Dashboard}/>
                <Route path = '/create_reactjs' exact component={CreateReactjs}/>
                <Route path = '/manage_reactjs' exact component={ManageReactjs}/>
                <Route path = '/login' exact component={Login}/>
            </Switch>
        </div>
    )
}
export default BodySection;