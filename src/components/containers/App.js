import { HashRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import React, {Fragment} from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import Container from './Container'
import Error from '../ui/Error'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setUser, unsetUser, getUser } from '../../actions'

class App extends Component {

  logOut = () => {
    localStorage.removeItem('token')
    this.props.unsetUser();
  }

  componentDidMount(){
    let token = localStorage.getItem('token');
    if(token){
      this.props.setUser({token: token});
      this.props.getUser({token: token});
    } else {
      this.logOut()
    }
  }

  render(){
    return (
      <Fragment>
        <Header />
        <Container />
        <Footer />
      </Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  console.log(state)
    return {
      auth: state.auth
    }
}

const mapDispatchToProps = dispatch =>
  ({
    setUser: (token) => {
      dispatch(setUser(token))
    },
    getUser: (token) => {
      dispatch(getUser(token))
    }
    ,
    unsetUser: () => {
      dispatch(unsetUser())
    }
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
