import React, { Fragment, Component } from 'react'
import { newContract } from '../../actions';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";


class CheckContract extends Component {

  state = {
    pdf: null,
    contract: {},
    results: false
  }

  componentDidMount(){

  var formValidationRules =
  {
      file: {
        identifier  : 'file',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please select a file'
          }
        ]
      }
    }

    var formSettings =
    {
        onSuccess: this.onSubmit.bind(this)
    }

    window.$('.ui.form').form(formValidationRules, formSettings);

  }

  handleChange = (event) => {
    this.setState({
      pdf: this.filesInput.files[0]
    })
  }

  onSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append('file', this.state.pdf);

    let options = {
      method: 'POST',
      headers: {"Authorization": this.props.auth.token},
      body: formData
    }

    fetch(`https://floating-shelf-30008.herokuapp.com/api/v1/check`, options)
      .then(resp => resp.json())
      .then(result => {
        if(result){
          this.setState({
            ...result,
            results: true
          })
        }
      })
  }

  render(){

    return (
      <Fragment>
      {(!this.state.contract.title && ! this.state.results) && (<Fragment>
        <h2 className="ui teal image header">
          <div className="content">
            Check contract authenticity
          </div>
        </h2>
        <form class="ui form">

          <div class="field">
            <label>Contract</label>
            <input type="file" accept= ".pdf" ref={(input) => { this.filesInput = input }} name="file"
     placeholder='Upload pdf...' onChange={this.handleChange.bind(this)} />
          </div>

        <button className="ui button" type="submit">Check</button>

        <div className="ui error message"></div>

        </form>
      </Fragment>)}

      {(!!this.state.contract.title && this.state.results) && (<Fragment>
        <h2 className="ui green image header">
          <div className="content">
            Contract Was Found in our Database
          </div>
        </h2>
        <p><strong>Title:</strong> {this.state.contract.title}</p>
        <p><strong>User's name:</strong> {this.state.contract.user.full_name}</p>
        <p><strong>Recipient's name:</strong> {this.state.contract.recipient.full_name}</p>
        <p><strong>token:</strong> {this.state.contract.contract_hash}</p>
      </Fragment>)}

      {(!this.state.contract.title && this.state.results) && (<Fragment>
        <h2 className="ui red image header">
          <div className="content">
            Contract Was NOT Found in our Database
          </div>
        </h2>
        <p><strong>File hash:</strong> {this.state.contract.contract_hash}</p>
      </Fragment>)}


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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckContract));
