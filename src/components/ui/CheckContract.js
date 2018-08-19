import React, { Fragment, Component } from 'react'
import { newContract } from '../../actions';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";


class CheckContract extends Component {

  state = {
    pdf: null,
    current_contract: null
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

    fetch(`http://localhost:3000/api/v1/check`, options)
      .then(resp => resp.json())
      .then(result => {
        alert(result.sha256);
        this.setState({
          current_contract: result.sha256
        })
      })
  }

  render(){

    return (
      <Fragment>
      {!this.state.current_contract && (<Fragment>
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

      {this.state.current_contract && (<Fragment>
        <p>SHA256: {this.state.current_contract}</p>
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
