import React, { Fragment } from 'react'

const Signup = () => (
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
          <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div class="field">
          <label>Last Name</label>
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
      </div>

      <div class="two fields">
        <div class="field">
          <label>Telephone</label>
          <input type="text" name="telephone" placeholder="Telephone" />
        </div>
          <div class="field">
            <label>Job Title</label>
            <input type="text" name="job_title" placeholder="Job Title" />
            </div>
      </div>

      <div class="field">
      <label>Industry</label>
      <select class="ui fluid dropdown">
        <option value="">Industry</option>
        <option value="Accounting">Accounting &amp; Tax</option>
        <option value="Business Services">Business Services / Consulting</option>
        <option value="Construction">Construction - General</option>
        <option value="Real Estate - Construction">Construction - Home Builder</option>
        <option value="Debt Settlement/Loan Modification">Debt Settlement</option>
        <option value="Education">Education</option>
        <option value="Banking">Financial Services - Banking</option>
        <option value="Credit Unions">Financial Services - Credit Unions</option>
        <option value="Wealth Management">Financial Services - Wealth &amp; Asset Management</option>
        <option value="Financial Services">Financial Services - Other</option>
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
      <input type="text" name="email" placeholder="E-mail" />
      </div>

    <div class="two fields">
      <div class="field">
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
        </div>
        <div class="field">
        <label>Password confirmation</label>
        <input type="text" name="password-confirmation" placeholder="Password confirmation" />
      </div>
    </div>

    <button class="ui button" type="submit">Submit</button>

    </form>
  </Fragment>
)

export default Signup;
