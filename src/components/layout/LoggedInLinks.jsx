import React from "react";
import { NavLink } from "react-router-dom";
import { logOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const LoggedInLinks = props => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Activity </NavLink>
      </li>
      <li>
        <a onClick={props.logOut}>Log Out </a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating green darken-3">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};
export default connect(null,mapDispatchToProps)(LoggedInLinks);
