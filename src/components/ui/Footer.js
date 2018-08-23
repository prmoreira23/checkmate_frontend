import React, { Fragment } from 'react'
import logo from "../../logo.png"

const Footer = (props) => {
  return (
    <Fragment>
    <div className="ui inverted vertical footer segment">
      <div className="ui center aligned container">
        <div className="ui stackable inverted divided grid">
          <div className="three wide column">
            <h4 className="ui inverted header">Our Company</h4>
            <div className="ui inverted link list">
              <a href="#" className="item">About us</a>
              <a href="#" className="item">Technology</a>
              <a href="#" className="item">Jobs</a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Services</h4>
            <div className="ui inverted link list">
              <a href="#" className="item">Private Contracts</a>
              <a href="#" className="item">Disposal of Sensitive Information</a>
              <a href="#" className="item">Learn more</a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Products</h4>
            <div className="ui inverted link list">
              <a href="#" className="item">For Individuals</a>
              <a href="#" className="item">For Companies</a>
              <a href="#" className="item">Overview</a>
            </div>
          </div>
          <div className="seven wide column">
            <h4 className="ui inverted header">CheckNSign</h4>
            <p>We allow you to create, share, and sign contracts privately. And the best part of all that is that we
             don't keep your personal information. Privacy above all.</p>
          </div>
        </div>
      <div className="ui inverted section divider"></div>
      <img src={logo} className="ui centered mini image"/>
      <div className="ui horizontal inverted small divided link list">
        <a className="item" href="#">Site Map</a>
        <a className="item" href="#">Contact Us</a>
        <a className="item" href="#">Terms and Conditions</a>
        <a className="item" href="#">Privacy Policy</a>
      </div>
      </div>
    </div>
    </Fragment>
  )
}

export default Footer;
