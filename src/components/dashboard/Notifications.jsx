import React from "react";
import moment from 'moment';
const Notifications = (props) => {
  const {notifications} = props;
  return (
    <div className="section">
      <div className="z-depth-2 card ">
        <div className="card-content">
          <span className="card-title center">Notifications</span>
          <ul className="notifications">
            {notifications && notifications.map(item => {
              return(
                <li key={item.id}>
                  <span className="red-text">{item.user} </span>
                  <span>{item.content} </span>
                  <div className="grey-text note-date">
                    {moment(item.time.toDate()).fromNow()}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;