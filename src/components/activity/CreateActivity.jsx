import React, { Component } from "react";
import { connect } from 'react-redux';
import { createActivity } from '../../store/actions/activityActions';
import { Redirect } from "react-router-dom";

class CreateActivity extends Component {
  state = {
    title: "",
    content: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state);
    this.props.createActivity(this.state);
    this.props.history.push('/');
  };
  render() {
    const {auth} = this.props;
    if(!auth.uid) return <Redirect to='/login' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h4 className="grey-text text-darken-3">New Activity</h4>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="text">Activity Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>
          <div className="input-field">
            <button className="btn green lighten-1 z-depth-0">CREATE</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }

}
const mapDispatchToProps = (dispatch) => {
  return{
    createActivity: (activity) => {dispatch(createActivity(activity))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateActivity);
