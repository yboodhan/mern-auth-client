// Packages
import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router-dom'

class Signup extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    profileUrl: ''
  }

  storeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitted!', this.state)
  }

  render() {
    return (
      <div>
        <h2>Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>First Name:</label>
            <input name="firstname" placeholder="Your first name" onChange={this.storeInput} />
          </div>
          <div>
            <label>Last Name:</label>
            <input name="lastname" placeholder="Your last name" onChange={this.storeInput} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" onChange={this.storeInput} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" onChange={this.storeInput} />
          </div>
          <div>
            <label>Profile Pic URL:</label>
            <input type="url" name="profileUrl" onChange={this.storeInput} />
          </div>
          <button type="submit">Sign Me Up!</button>
        </form>
      </div>
    )
  }
}

export default Signup
