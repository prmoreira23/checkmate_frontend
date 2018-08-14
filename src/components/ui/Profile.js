import React, { Fragment } from 'react'
import { connect } from 'react-redux'


const Welcome = (props) => {
  return (
  <Fragment>
  <h2 className="ui teal image header">
    <div className="content">
      MY PROFILE
    </div>
  </h2>
    <p><strong>Full Name:</strong> {props.current_user && props.current_user.full_name}</p>
    <p><strong>E-mail:</strong> {props.current_user && props.current_user.email}</p>
    <p><strong>Phone:</strong> {props.current_user && props.current_user.phone}</p>
    <p><strong>Job Title:</strong> {props.current_user && props.current_user.job_title}</p>
    <p><strong>Industry:</strong> {props.current_user && props.current_user.industry}</p>
  </Fragment>
)}

const mapStateToProps = (state) => {
  console.log("WELCOME", state.auth.current_user && state.auth.current_user.first_name)
    return {
      current_user: state.auth.current_user
    }
}

export default connect(mapStateToProps, null)(Welcome);
