import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../logo.png"

const Header = (props) => {
  return (
    <div className="ui fixed inverted menu">
      <div className="ui container">
        <Link className="header item" to='/'>
          <img className="logo" src={logo}/>
          CheckNSign
        </Link>
        <Link className="item" to='/'>Home</Link>
        <Link className="item" to='/roster'>Roster</Link>
        <Link className="item" to='/schedule'>Schedule</Link>

        <div className="ui simple dropdown item">
          Dropdown <i className="dropdown icon"></i>
          <div className="menu">
            <a className="item" href="#">Link Item</a>
            <a className="item" href="#">Link Item</a>
            <div className="divider"></div>
            <div className="header">Header Item</div>
            <div className="item">
              <i className="dropdown icon"></i>
              Sub Menu
              <div className="menu">
                <a className="item" href="#">Link Item</a>
                <a className="item" href="#">Link Item</a>
              </div>
            </div>
            <a className="item" href="#">Link Item</a>
          </div>
        </div>

        <Link className="item right" to='/signin'>Login</Link>
        <Link className="item" to='/signup'>Sign up</Link>

      </div>
    </div>
  )
}

export default Header;
