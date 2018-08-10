import React from 'react'
import routes from '../routes'

import { Switch } from 'react-router-dom';
import { Route, withRouter } from 'react-router-dom';


export const App = ({children}) => {
  return (
    <div className="app">
    <h1>Header</h1>
    <Container />
    <h1>Footer</h1>
    </div>)
}

export const Error404 = ({ location }) => {
  return (
    <div className="error-404">
    <h1>Whoops, route not found</h1>
    <p>Cannot find content for {location.pathname}</p>
    </div>)
}

export const Welcome = ({ children }) => {
  return (
    <div className="welcome">
    <h1>Welcome to the Jungle!</h1>
    </div>)
}

const Container = ({ children }) => {
  return (
    <Switch>
    <Route exact path="/" component={() => console.log("Welcome")}/>
    <Route path="*" component={()=> console.log("Error404")}/>
    </Switch>)
}

export default withRouter(Container)
