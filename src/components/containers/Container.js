import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, withRouter } from 'react-router-dom';
import { Roster, Schedule } from '../ui/Home'
import Welcome from '../ui/Welcome'
import Signin from '../ui/Signin'
import Signup from '../ui/Signup'
import { connect } from 'react-redux'


const Container = (props) => {
  return (
    <Fragment>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="root"></div>

      <div className="ui main text container">
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/roster' render={() => props.auth.token ? <Roster /> : <Redirect to="/signin" />}/>
          <Route path='/schedule' render={() => props.auth.token ? <Schedule /> : <Redirect to="/signin" />} />
          <Route path='/signin' render={() => props.auth.token ? <Redirect to="/" /> : <Signin />} />
          <Route path='/signup' render={() => props.auth.token ? <Redirect to="/" /> : <Signup />} />
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

// export default withRouter(Container);
export default withRouter(connect(mapStateToProps, null)(Container));
