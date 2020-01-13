import React from "react";
import { Link } from "react-router-dom";
import LoggedInLinks from './LoggedInLinks';
import LoggedOutLinks from './LoggedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const {auth, profile} = props;
  const links = auth.uid ? <LoggedInLinks profile={profile} /> : <LoggedOutLinks />;
  return (
    <nav className="nav-wrapper black darken-4">
      <div className="container">
        <Link to="/" className= "brand-logo">
          Activity Plan
        </Link>
        {auth.isLoaded && links }
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile : state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);
