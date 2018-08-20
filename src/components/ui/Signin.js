import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { userLogin } from '../../actions'
import { login } from '../../adapter'

class Signin extends Component {

  state = {
    user: {
      email: "",
      password: ""
    }
  }

  componentDidMount(){


var formValidationRules =
{
            email: {
              identifier  : 'email',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Please enter your e-mail'
                },
                {
                  type   : 'email',
                  prompt : 'Please enter a valid e-mail'
                }
              ]
            },
            password: {
              identifier  : 'password',
              rules: [
                {
                  type   : 'empty',
                  prompt : 'Password can\'t be blank'
                },
                {
                  type   : 'length[5]',
                  prompt : 'Passwords must be at least 5 characters'
                }
              ]
            }
          }

  var formSettings =
  {
      onSuccess: this.onSubmitForm.bind(this)
  }

  window.$('.ui.form').form(formValidationRules, formSettings);

}

    onEmailChange = (e) => {
      this.setState({
        user: {
          ...this.state.user,
          email: e.target.value
        }
      }, ()=> {
        console.log(this.state);
      });
    }

    onPasswordChange = (e) => {
      this.setState({
        user: {
          ...this.state.user,
          password: e.target.value
        }
      }, ()=> {
        console.log(this.state);
      });
    }

    onSubmitForm = (e) => {
      e.preventDefault();
      this.props.userLogin(this.state.user, '/signin');
    }

  render(){

    return (
      <Fragment>
        <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui teal image header">
            <div className="content">
              Log-in to your account
            </div>
          </h2>

          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <input onChange={this.onEmailChange} type="text" value={this.state.user.email} name="email" placeholder="E-mail address"/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <input onChange={this.onPasswordChange} type="password" value={this.state.user.password} name="password" placeholder="Password"/>
                </div>
              </div>
              <div className="ui fluid large ok teal submit button">Login</div>
            </div>

            <div className="ui error message"></div>

          </form>

          <div className="ui message">
            New to us? <Link className="item" to='/signup'>Sign up</Link>
          </div>
        </div>
      </div>
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
    userLogin: (credentials, pathname) => {
      dispatch(userLogin(credentials, pathname))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
