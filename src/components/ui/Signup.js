import React, { Fragment, Component } from 'react'
import { userSignup } from '../../actions';
import { connect } from 'react-redux'


class Signup extends Component {

  state = {
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      job_title: "",
      industry: "",
      password: "",
      password_confirmation: ""
    }
  }

  componentDidMount(){

  var formValidationRules =
  {
              first_name: {
                identifier  : 'first_name',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter your first name'
                  }
                ]
              },
              last_name: {
                identifier  : 'last_name',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter your last name'
                  }
                ]
              },
              phone: {
                identifier  : 'phone',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter your telephone'
                  }
                ]
              },
              job_title: {
                identifier  : 'job_title',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter your job title'
                  }
                ]
              },
              industry: {
                identifier  : 'industry',
                rules: [
                  {
                    type   : 'not[]',
                    prompt : 'Please select an industry'
                  }
                ]
              },
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
              },
              password_confirmation: {
                identifier  : 'password_confirmation',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Password confirmation can\'t be blank'
                  },
                  {
                    type   : 'match[password]',
                    prompt : 'Password and password confirmation must match'
                  }
                ]
              }
            }

    var formSettings =
    {
        onSuccess: this.onSubmit
    }

    window.$('.ui.form').form(formValidationRules, formSettings);

  }

  onChange = (event) => {
    event.persist();

    window.$('.ui.form').form('validate form');
    this.setState((prevState) => {
      return {
        user: {...prevState.user,
          [event.target.name]: event.target.value
        }
      }
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.userSignup({user: this.state.user});
  }

  render(){

    return (
      <Fragment>
      <h2 className="ui teal image header">
        <div className="content">
          Create a new account
        </div>
      </h2>
      <form class="ui form">

        <h4 class="ui dividing header">Personal information</h4>
        <div class="two fields">
          <div class="field">
            <label>First Name</label>
            <input type="text" name="first_name" placeholder="First Name" value={this.state.user.first_name} onChange={this.onChange} />
            </div>
            <div class="field">
            <label>Last Name</label>
            <input type="text" name="last_name" placeholder="Last Name" value={this.state.user.last_name} onChange={this.onChange} />
          </div>
        </div>

        <div class="two fields">
          <div class="field">
            <label>Telephone</label>
            <input type="text" name="phone" placeholder="Telephone" value={this.state.user.phone} onChange={this.onChange} />
          </div>
            <div class="field">
              <label>Job Title</label>
              <input type="text" name="job_title" placeholder="Job Title" value={this.state.user.job_title} onChange={this.onChange} />
              </div>
        </div>

        <div class="field">
        <label>Industry</label>
        <select name="industry" class="ui fluid dropdown" value={this.state.user.industry} onChange={this.onChange}>
          <option value="">Industry</option>
          <option value="Accounting">Accounting &amp; Tax</option>
          <option value="Business Services">Business Services / Consulting</option>
          <option value="Construction">Construction - General</option>
          <option value="Real Estate - Construction">Construction - Home Builder</option>
          <option value="Debt Settlement/Loan Modification">Debt Settlement</option>
          <option value="Education">Education</option>
          <option value="Financial Services - Banking">Financial Services - Banking</option>
          <option value="Financial Services - Credit Unions">Financial Services - Credit Unions</option>
          <option value="Financial Services - Wealth Management">Financial Services - Wealth &amp; Asset Management</option>
          <option value="Financial Services - Financial Services">Financial Services - Other</option>
          <option value="Government - City">Government - City</option>
          <option value="Government - County">Government - County</option>
          <option value="Government - National">Government - Federal</option>
          <option value="Government - State">Government - State</option>
          <option value="HR Staffing">HR Staffing</option>
          <option value="Insurance - Health">Healthcare - Health Plans &amp; Payers</option>
          <option value="Healthcare - Providers">Healthcare - Providers</option>
          <option value="Insurance - Agency">Insurance - Agents / Brokers</option>
          <option value="Insurance - Carriers">Insurance - Carriers</option>
          <option value="Legal">Legal</option>
          <option value="Life Sciences - Medical Devices">Life Sciences - Medical Devices</option>
          <option value="Life Sciences - Pharmaceuticals">Life Sciences - Pharmaceuticals</option>
          <option value="Life Sciences - Wholesale/Distributor">Life Sciences - Wholesale Distributors</option>
          <option value="Life Sciences - Other">Life Sciences - Other</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Real Estate - Mortgage">Mortgage Broker</option>
          <option value="Not For Profit">Not For Profit</option>
          <option value="Real Estate - Agent">Real Estate - Agent</option>
          <option value="Real Estate - Broker/Owner">Real Estate - Broker/Owner</option>
          <option value="Real Estate - Commercial">Real Estate - Commercial</option>
          <option value="Real Estate - Property Management">Real Estate - Property Management</option>
          <option value="Retail">Retail</option>
          <option value="Travel &amp; Leisure">Sports &amp; Entertainment</option>
          <option value="Technology">Technology - General</option>
          <option value="Technology">Technology - Startup</option>
          <option value="Telecommunications">Telecommunications</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <h4 class="ui dividing header">Authentication information</h4>

      <div class="field">
        <label>E-mail</label>
        <input type="text" name="email" placeholder="E-mail" value={this.state.user.email} onChange={this.onChange} />
        </div>

      <div class="two fields">
        <div class="field">
          <label>Password</label>
          <input type="password" name="password" placeholder="Password" value={this.state.user.password} onChange={this.onChange} />
          </div>
          <div class="field">
          <label>Password confirmation</label>
          <input type="password" name="password_confirmation" placeholder="Password confirmation" value={this.state.user.password_confirmation} onChange={this.onChange} />
        </div>
      </div>

      <button class="ui button" type="submit">Submit</button>

      <div className="ui error message"></div>

      </form>
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
    userSignup: (user) => {
      dispatch(userSignup(user))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
