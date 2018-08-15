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

        {props.auth.token && (
          <Fragment>
          <Link className="item" to='/'>My Profile</Link>
          <Link className="item" to='/dashboard'>Dashboard</Link>
          <Link className="item" to='/contracts/new'>Create a Contract</Link>
          <Link className="item" to='/contracts/check'>Check Contract</Link>
        </Fragment>)
        }

        {!props.auth.token ? (
          <Fragment>
          <Link className="item" to='/about'>About</Link>
          <Link className="item" to='/contracts/check'>Check Contract</Link>
          <div className="item right">
            <Link className="item" to='/signin'>Login</Link>
            <Link className="item" to='/signup'>Sign up</Link>
            </div>
          </Fragment>
        ) : (
          <Fragment>
          <div className="item right">
            <div className="item">Welcome, {props.auth.current_user ? `${props.auth.current_user.first_name}!` : null}</div>
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
