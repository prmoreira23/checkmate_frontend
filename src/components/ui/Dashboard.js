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

      <table class="ui selectable inverted table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th class="right aligned">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Approved</td>
            <td class="right aligned">None</td>
          </tr>
          <tr>
            <td>Jamie</td>
            <td>Approved</td>
            <td class="right aligned">Requires call</td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Denied</td>
            <td class="right aligned">None</td>
          </tr>
        </tbody>
      </table>
    </Fragment>
  )
}

export default Dashboard
