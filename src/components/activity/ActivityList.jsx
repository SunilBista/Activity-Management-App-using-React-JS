import React from "react";
import ActivitySummary from "./ActivitySummary";
import { Link } from 'react-router-dom';

const ActivityList = ({activity}) => {
  return (
    <div className="project-list section">
      {activity && activity.map(activity => {
        return(
          <Link to={'/activity/' + activity.id} key={activity.id} >
          <ActivitySummary activity={activity} />
          </Link>
        )
      })}

    </div>
  );
};

export default ActivityList;
