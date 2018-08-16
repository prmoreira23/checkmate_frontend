import React, { Fragment, Component } from 'react'
import { newContract } from '../../actions';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";


class Signup extends Component {

  state = {
    contract: {
      recipient_id: "",
      title: "",
      content: "",
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
        onSuccess: this.onSubmit
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
    this.props.createContract({contract: this.state.contract}, this.props.auth.token);
    this.props.history.push("/dashboard");
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

        <div class="two fields">
          <div class="field">
            <label>Recipient id</label>
            <input type="number" name="recipient_id" placeholder="Recipient id" value={this.state.contract.recipient_id} onChange={this.onChange} />
          </div>
          <div class="field">
            <label>title</label>
            <input type="text" name="title" placeholder="Title" value={this.state.contract.title} onChange={this.onChange} />
          </div>
        </div>

        <div class="field">
          <label>Content</label>
          <textarea name="content" placeholder="Content" value={this.state.contract.content} onChange={this.onChange}></textarea>
        </div>

      <button className="ui button" type="submit">Submit</button>

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
    createContract: (contract, token) => {
      console.log("HERE: ", contract, token);
      dispatch(newContract(contract, token))
    }
  })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup));
