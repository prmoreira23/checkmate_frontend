import React, { Fragment } from 'react'
import { connect } from 'react-redux'


const Contract = (props) => {
  return (
  <Fragment>
  <h2 className="ui teal image header">
    <div className="content">
      {props.current_contract !== null && props.current_contract}
    </div>
  </h2>
    <p><strong>ID:</strong> {props.current_contract && props.current_contract.id}</p>

  </Fragment>
)}

const mapStateToProps = (state) => {
    return {
      current_contract: state.contracts.current_contract
    }
}

export default connect(mapStateToProps, null)(Contract);
