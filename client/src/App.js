import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import WebsiteRoute from './components/WebsiteRoute';
import AdminRoute from './components/AdminRoute';


const App = () => {
  const user = null;
  return (
        <Switch>
          <Route path="/admin" component={AdminRoute}/>
          <Route path="/" component={WebsiteRoute}/>
        </Switch>
  );
}

export default App;
