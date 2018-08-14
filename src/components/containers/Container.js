import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, withRouter } from 'react-router-dom';
import { Roster, Schedule } from '../ui/Home'
import Welcome from '../ui/Welcome'
import Signin from '../ui/Signin'
import Profile from '../ui/Profile'
import Signup from '../ui/Signup'
import { connect } from 'react-redux'
import { unsetUser } from '../../actions'
import ContractContainer from '../ui/ContractContainer'



const Container = (props) => {

  const logOut = () => {
    localStorage.removeItem('token')
    props.unsetUser();
    props.history.push('/signin')
  }

  return (
    <Fragment>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="root"></div>

      <div className="ui main text container">
        <Switch>
          <Route exact path='/' render={() => props.auth.token ? <Profile /> : <Welcome />} />
          <Route path='/dashboard' render={() => props.auth.token ? <ContractContainer /> : <Redirect to="/signin" />}/>
          <Route path='/schedule' render={() => props.auth.token ? <Schedule /> : <Redirect to="/signin" />} />
          <Route path='/signin' render={() => props.auth.token ? <Redirect to="/" /> : <Signin />} />
          <Route path='/signup' render={() => props.auth.token ? <Redirect to="/" /> : <Signup />} />
          <Route path='/signout' render={() => {
            if(props.auth.token){
              logOut();
              props.unsetUser()
            }
            return <Redirect to="/" />
            }
          }
          />
          <Route path='*' component={(props) => <h1>404</h1>} />
        </Switch>
      </div>
    </Fragment>
  )
}




const mapStateToProps = (state) => {
  console.log(state)
    return {
      auth: state.auth
    }
}

const mapDispatchToProps = dispatch =>
  ({
    unsetUser: () => {
      dispatch(unsetUser())
    }
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));
