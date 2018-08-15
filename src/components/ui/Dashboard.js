import React, { Fragment, Component } from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import { getIncomingContracts, getOutcomingContracts } from '../../actions';
import { connect } from 'react-redux'
import {setCurrentContract} from '../../actions'

class Dashboard extends Component {

  onClickButton = (event) => {
    let id = event.target.dataset.id;
    let contracts = this.props.contracts.incoming_contracts.concat(this.props.contracts.outcoming_contracts);
    let contract = contracts.find(cont => cont.id == id);
    this.props.setContract(contract);
  }

  eachContract = (contracts, my=true) => {
    return contracts.map(contract => {
      return (
        <tr key={contract.id}>
          <td><Link to={`/dashboard/contracts/${contract.id}`} data-id={contract.id} onClick={this.onClickButton.bind(this)}>{contract.title}</Link></td>
          <td>{contract.status}</td>
          <td className="right aligned">{my ? contract.user.full_name : contract.recipient.full_name}</td>
        </tr>
      )
    })
  }

  render(){
    return (
      <Fragment>
        <h2 className="ui teal image header">
          <div className="content">
            My Dashboard
          </div>
        </h2>

        <h2>Incoming Contracts</h2>
        {this.props.contracts && this.props.contracts.incoming_contracts.length !== 0 ?
          (
            <table className="ui selectable inverted table">
              <thead>
                <tr>
                  <th>Contract's title</th>
                  <th>Status</th>
                  <th className="right aligned">Author</th>
                </tr>
              </thead>
              <tbody>

                { this.eachContract(this.props.contracts.incoming_contracts) }

              </tbody>
            </table>
          )
           :
           <div>NO, CONTRACTS</div>
         }

        <h2>Outcoming Contracts</h2>

        {this.props.contracts && this.props.contracts.outcoming_contracts.length !== 0 ?
          (
            <table className="ui selectable inverted table">
              <thead>
                <tr>
                  <th>Contract's title</th>
                  <th>Status</th>
                  <th className="right aligned">Recipient</th>
                </tr>
              </thead>
              <tbody>

                { this.eachContract(this.props.contracts.outcoming_contracts, false) }

              </tbody>
            </table>
          )
           :
           <div>NO, CONTRACTS</div>
         }


      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      contracts: state.contracts,
      auth: state.auth
    }
}

const mapDispatchToProps = dispatch =>
  ({
    setContract: (contract) => {
      dispatch(setCurrentContract(contract))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
