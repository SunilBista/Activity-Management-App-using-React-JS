import React from "react";
import moment from 'moment';

const ActivitySummary = ({activity}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title deep-purple-text lighten-1">
          {activity.title}
        </span>
        <p>Posten by {activity.authorFirstName} {activity.authorLastName}</p>
        <p className="grey-text">{moment(activity.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  );
};

export default ActivitySummary;
