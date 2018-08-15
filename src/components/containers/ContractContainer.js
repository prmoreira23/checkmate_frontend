import React from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Dashboard from '../ui/Dashboard'
import Contract from '../ui/Contract'

const ContractContainer = () => (
  <Switch>
    <Route exact path='/dashboard' component={Dashboard}/>
    <Route path='/dashboard/contracts/:id' component={Contract} />
  </Switch>
)

export default ContractContainer;
