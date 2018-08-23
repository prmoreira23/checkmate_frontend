import React, { Fragment, Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
import { BrowserRouter, Switch, withRouter } from 'react-router-dom';
import { Roster, Schedule } from '../ui/Home'
import Welcome from '../ui/Welcome'
import Signin from '../ui/Signin'
import Profile from '../ui/Profile'
import Signup from '../ui/Signup'
import { connect } from 'react-redux'
import { unsetUser, unsetError } from '../../actions'
import ContractContainer from './ContractContainer'
import NewContract from '../ui/NewContract'
import About from '../ui/About'
import CheckContract from '../ui/CheckContract'


class Container extends Component{

  logOut = () => {
    localStorage.removeItem('token')
    this.props.unsetUser();
    this.props.history.push('/signin')
  }

  componentDidUpdate(){
    this.props.error.message && (this.props.location.pathname === this.props.error.pathname ? null : this.props.unsetError());
  }

  render(){
  return (
    <Fragment>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      <div id="root"></div>

      <div className="ui main text container">
        {this.props.error.message && (<Fragment>
          <div className="ui negative message">
            <i className="close icon" onClick={this.props.unsetError}></i>
            {this.props.error.message}
          </div>
        </Fragment>)}
        <Switch>
          <Route exact path='/' render={() => this.props.auth.token ? <Profile /> : <Welcome />} />
          <Route path='/dashboard' render={() => this.props.auth.token ? <ContractContainer /> : <Redirect to="/signin" />}/>
          <Route path='/contracts/new' render={() => this.props.auth.token ? <NewContract /> : <Redirect to="/signin" />}/>
          <Route path='/contracts/check' component={CheckContract}/>
          <Route path='/schedule' render={() => this.props.auth.token ? <Schedule /> : <Redirect to="/signin" />} />
          <Route path='/about' component={About} />
          <Route path='/signin' render={() => this.props.auth.token ? <Redirect to="/" /> : <Signin />} />
          <Route path='/signup' render={() => this.props.auth.token ? <Redirect to="/" /> : <Signup />} />
          <Route path='/signout' render={() => {
            if(this.props.auth.token){
              this.logOut();
              this.props.unsetUser()
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
}




const mapStateToProps = (state) => {
  console.log(state)
    return {
      auth: state.auth,
      error: state.errors
    }
}

const mapDispatchToProps = dispatch =>
  ({
    unsetUser: () => {
      dispatch(unsetUser())
    },
    unsetError: () => {
      dispatch(unsetError())
    }
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Container));
