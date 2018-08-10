import React, { Fragment } from 'react'
// import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter, Switch } from 'react-router-dom';
import { App, Error404, Welcome } from './components'

const routes = (
          <Switch>
            <Route exact path="/" component={() => console.log("Welcome")}/>
            <Route path="*" component={()=> console.log("Error404")}/>
          </Switch>
)

export default routes
