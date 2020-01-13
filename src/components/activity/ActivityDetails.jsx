import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from 'moment';

const ActivityDetails = props => {
  const { activity, auth } = props;
  if(!auth.uid) return <Redirect to='/login' />
  if (activity) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-1">
          <div className="card-content">
            <span className="card-title">{activity.title}</span>
            <p>{activity.content}</p>
          </div>
          <div className="card-action grey lighten-3 black-text">
            <div>
              Posted by {activity.authorFirstName} {activity.authorLastName}
            </div>
            <div>{moment(activity.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loading activity......</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const activities = state.firestore.data.activity;
  const activity = activities ? activities[id] : null;
  return {
    activity: activity,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "activity" }])
)(ActivityDetails);
