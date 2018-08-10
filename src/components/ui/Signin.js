import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';

class Signin extends Component {

  componentDidMount(){
    console.log("SIGN IN MOUNTED");
      window.$(document)
        .ready(function(){
          window.$('.ui.form')
            .form({
              fields: {
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
                      prompt : 'Please enter your password'
                    },
                    {
                      type   : 'length[6]',
                      prompt : 'Your password must be at least 6 characters'
                    }
                  ]
                }
              }
            });
        });
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
                  <input type="text" name="email" placeholder="E-mail address"/>
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <input type="password" name="password" placeholder="Password"/>
                </div>
              </div>
              <div className="ui fluid large teal submit button">Login</div>
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

export default Signin;
