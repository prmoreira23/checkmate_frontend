import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import logo from "../../logo.png"
import { connect } from 'react-redux'


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

        {!props.auth.token ? (
          <Fragment>
          <div className="item right">
            <Link className="item" to='/signin'>Login</Link>
            <Link className="item" to='/signup'>Sign up</Link>
            </div>
          </Fragment>
        ) : (
          <Fragment>
          <div className="item right">
            <div className="item">HI, PABLO</div>
            <Link className="item" to='/signout'>Sign out</Link>
          </div>
          </Fragment>
        )}


      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
    return {
      auth: state.auth
    }
}

// const mapDispatchToProps = dispatch =>
//   ({
//     userLogin: (credentials) => {
//       console.log("CALL USER LOGIN", credentials);
//       dispatch(userLogin(credentials))
//     }
//   })

export default connect(mapStateToProps, null)(Header);
