import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Dashboard from './components/dashboard/Dashboard';
import ActivityDetails from './components/activity/ActivityDetails';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import CreateActivity from './components/activity/CreateActivity';
class App extends Component {
  render() { 
    return ( 
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/activity/:id' component={ActivityDetails} />
          <Route path='/login' component={LogIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={CreateActivity} />
        </Switch>
      </div>
      </BrowserRouter>
     );
  }
}
 
export default App;