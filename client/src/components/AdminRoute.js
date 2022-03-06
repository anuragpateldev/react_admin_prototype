
import Login from './Admin/Login/Login';
import Signup from './Admin/Signup/Signup';
import Dashboard from './Admin/Dashboard/Dashboard';
import CreateUser from './Admin/Users/CreateUser';
import ManageUsers from './Admin/Users/ManageUsers';
import Profile from './Admin/Profile/Profile';

import {Switch,Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const AdminRoute = () => {
  const user = null;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/admin" component={()=>(user ? <Dashboard/> : <Redirect to="/admin/login"/>)}/>
        <Route path="/admin/login" component={Login} />
        <Route path="/admin/signup" component={Signup}/>
        <Route path="/admin/dashboard" component={Dashboard}/>
        <Route path="/admin/create_user" component={CreateUser}/>
        <Route path="/admin/manage_users" component={ManageUsers}/>
        <Route path="/admin/profile" component={Profile}/>
      </Switch>
    </div>
  );
}

export default AdminRoute;
