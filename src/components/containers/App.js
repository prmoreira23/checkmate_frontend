import { HashRouter, Switch, Route, Link, withRouter } from 'react-router-dom'
import React, {Fragment} from 'react'
import Header from '../ui/Header'
import Footer from '../ui/Footer'
import Container from './Container'
import { Component } from 'react'
import { connect } from 'react-redux'
import { setUser, unsetUser } from '../../actions'

class App extends Component {

  componentDidMount(){
    console.log("App mounted")
    let token = localStorage.getItem('token');
    if(token){
      console.log("SETTING USER", this.props.auth)
      this.props.setUser({token: token});
      console.log("SETTING FDIUSER", this.props.auth)
    } else {
      this.logOut()
    }
  }

  logOut = () => {
    localStorage.removeItem('token')
    this.props.unsetUser();
    this.props.history.push('/login')
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
    unsetUser: () => {
      dispatch(unsetUser())
    }
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
