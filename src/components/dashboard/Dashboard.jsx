import React, { Component } from "react";
import Notifications from './Notifications';
import ActivityList from '../activity/ActivityList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; //connect component to firebase DB
import { compose } from 'redux';
import {Redirect} from 'react-router-dom';
class Dashboard extends Component {
  render() {
    //console.log(this.props);
    const { activity, auth, notifications } = this.props;
    if(!auth.uid) return <Redirect to='login' />
    return (
      <div className="dashboard container">
        <div className="row">
            <div className="col s12 m6">
                <ActivityList activity={activity}/>
            </div>
            <div className="col s12 m4 offset-m2">
                <Notifications notifications={notifications}/>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    activity: state.firestore.ordered.activity, //mapping from firestore
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'activity' ,orderBy: ['createdAt', 'desc'] },
    {collection: 'notifications', limit: 4, orderBy: ['time', 'desc']}
  ])
)(Dashboard);
