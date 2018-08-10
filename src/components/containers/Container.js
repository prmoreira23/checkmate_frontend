import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, withRouter } from 'react-router-dom';
import { Roster, Schedule } from '../ui/Home'
import Welcome from '../ui/Welcome'
import Signin from '../ui/Signin'
import Signup from '../ui/Signup'


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
          <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/signup' component={Signup}/>
          <Route path='*' component={(props) => <h1>404</h1>}/>
        </Switch>
      </div>
    </Fragment>
  )
}

export default withRouter(Container);
