import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    let links = ''

    // If the user is logged in, show profile page and logout links
    if (this.props.user) {
      links = (
        <span>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </span>
      )
    }
    else {
      links = (
        <span>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </span>
      )
    }

    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {links}
        </ul>
      </nav>
    )
  }
}

export default Nav
