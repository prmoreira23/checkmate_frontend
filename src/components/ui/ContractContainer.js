import React from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './Dashboard'

const ContractContainer = () => (
  <Switch>
    <Route exact path='/dashboard' component={Dashboard}/>
    <Route path='/dashboard/contracts/:id' component={() => <p>OI</p>}/>
  </Switch>
)

export default ContractContainer;
