import React, { Fragment } from 'react'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <Fragment>
      <h2 className="ui teal image header">
        <div className="content">
          MY DASHBOARD
        </div>
      </h2>

      <h2>Incoming Contracts</h2>
      <table class="ui selectable inverted table">
        <thead>
          <tr>
            <th>Contract's title</th>
            <th>Status</th>
            <th class="right aligned">Author</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home Lease Contract</td>
            <td>Waiting for other party's signature</td>
            <td class="right aligned">Patrick Abejar</td>
          </tr>
          <tr>
            <td>Honda CRV 2015 Selling Contract</td>
            <td>Binded</td>
            <td class="right aligned">Jathmel Gordon</td>
          </tr>
          <tr>
            <td>Business Lease Contract</td>
            <td>Requires your signature</td>
            <td class="right aligned">Alicia Keys</td>
          </tr>
        </tbody>
      </table>

      <h2>Outcoming Contracts</h2>
      <table class="ui selectable inverted table">
        <thead>
          <tr>
            <th>Contract's title</th>
            <th>Status</th>
            <th class="right aligned">Recipient</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Home Lease Contract</td>
            <td>Waiting for other party's signature</td>
            <td class="right aligned">Patrick Abejar</td>
          </tr>
          <tr>
            <td>Honda CRV 2015 Selling Contract</td>
            <td>Binded</td>
            <td class="right aligned">Jathmel Gordon</td>
          </tr>
          <tr>
            <td>Business Lease Contract</td>
            <td>Requires your signature</td>
            <td class="right aligned">Frankie Cosmic</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  )
}

export default Dashboard
