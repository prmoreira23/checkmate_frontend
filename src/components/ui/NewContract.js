import React, { Fragment, Component } from 'react'
import { userSignup } from '../../actions';
import { connect } from 'react-redux'


class Signup extends Component {

  state = {
    contract: {
      recipient_id: "",
      title: "",
      content: "",
      status: ""
    }
  }

  componentDidMount(){
    window.$.fn.form.settings.rules.greaterOrEqualThan = function(inputValue, validationValue) {
      return inputValue >= validationValue;
    }

  var formValidationRules =
  {
      recipient_id: {
        identifier  : 'recipient_id',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter recipient id'
          },
          {
            type   : 'integer',
            prompt : 'Please enter an integer  number'
          },
          {
            type   : 'greaterOrEqualThan[0]',
            prompt : 'Please enter a number >= 0'
          }
        ]
      }
    }

    var formSettings =
    {
        onSuccess: () => alert("Pablo")
    }

    window.$('.ui.form').form(formValidationRules, formSettings);

  }

  onChange = (event) => {
    event.persist();
    this.setState((prevState) => {
      return {
        contract: {...prevState.contract,
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
          Create a new contract
        </div>
      </h2>
      <form class="ui form">

        <h4 class="ui dividing header">Personal information</h4>
        <div class="two fields">
          <div class="field">
            <label>Recipient id</label>
            <input type="number" name="recipient_id" placeholder="Recipient id" value={this.state.contract.recipient_id} onChange={this.onChange} />
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
