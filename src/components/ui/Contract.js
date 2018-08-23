import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {getContractPdf} from '../../adapter'

const Contract = (props) => {

  const onClickButton = (event) => {
    getContractPdf(props.current_contract.id, props.auth.token, props.current_contract.title)
    .then(p => console.log("Starting download..."));
  }

  return (
  <Fragment>
  { props.current_contract ? (
    <Fragment>
      <h2 className="ui teal image header">
        <div className="content">
          {props.current_contract.title}
        </div>
      </h2>
      <p><strong>ID:</strong> {props.current_contract.id}</p>
      <p><strong>Status:</strong> {props.current_contract.status}</p>
      <p><strong>User:</strong> {props.current_contract.user.full_name}</p>
      <p><strong>Recipient:</strong> {props.current_contract.recipient.full_name}</p>
      <p><strong>Content:</strong> {props.current_contract.content}</p>

     {props.current_contract.status === "CONTRACT SUCCESFULLY BINDED" && (<div className="ui medium ok teal submit button" onClick={onClickButton}>Download</div>)}
     {(props.current_contract.status === "REQUIRES USER'S SIGNATURE" && props.auth.current_user.id === props.current_contract.user.id) && (<div className="ui medium ok teal submit button" onClick={()=> alert("Signing Contract")}>Sign Contract</div>)}
     {(props.current_contract.status === "REQUIRES USER'S SIGNATURE" && props.auth.current_user.id !== props.current_contract.user.id) && (<p class="ui red header">Waiting for other party to sign contract</p>)}
     {(props.current_contract.status === "REQUIRES RECIPIENT'S SIGNATURE" && props.auth.current_user.id === props.current_contract.recipient.id) && (<div className="ui medium ok teal submit button" onClick={()=> alert("Signing Contract")}>Sign Contract</div>)}
     {props.current_contract.status === "REQUIRES BOTH PARTIES' SIGNATURES" && (<div className="ui medium ok teal submit button" onClick={()=> alert("Signing Contract")}>Sign Contract</div>)}
    </Fragment>
  ) : (
    <p>No Contract set up</p>
  )}
  <br />
  <br />
    <Link className="item" to='/dashboard'>Go Back</Link>
  </Fragment>
)
}

const mapStateToProps = (state) => {
    return {
      current_contract: state.contracts.current_contract,
      auth: state.auth
    }
}

export default connect(mapStateToProps, null)(Contract);
