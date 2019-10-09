// Import packages
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

// Resources and custom components
import './App.css';
import Content from './content/Content'
import Header from './nav/Header'
import Nav from './nav/Nav'
// import SERVER_URL from './constants'

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    // Go look for a token
    this.decodeToken()
  }

  updateUser = (newToken) => {
    if (newToken) {
      // Store Token in localStorage
      localStorage.setItem('mernToken', newToken)
      this.decodeToken(newToken)
    }
  }

  decodeToken = (existingToken) => {
    let token = existingToken || localStorage.getItem('mernToken')

    if (token) {
      let decoded = jwtDecode(token)

      // If the token is expired or it couldn't be decoded, refresh with the server
      if (!decoded || Date.now() >= decoded.exp * 1000) {
        console.log('expired!')
        this.setState({ user: null })
      }
      else {
        this.setState({ user: decoded })
      }
    }
    else {
      this.setState({ user: null })
    }
  }

  // refreshToken = () => {
  //   // See if there's a token
  //   let token = localStorage.getItem('mernToken')

  //   // If there's a token, try to use it to get the user info
  //   if (token) {
  //     fetch(`${SERVER_URL}/auth/current/user`, {
  //       headers: { 'Authorization': `Bearer ${token}` }
  //     })
  //     .then(response => response.json())
  //     .then(response => {
  //       console.log('Success', response)
  //       return response.token
  //     })
  //     .catch(err => {
  //       console.log('Error with token', err)
  //       return null
  //     })
  //   }
  //   else {
  //     return null
  //   }
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <Nav updateUser={this.updateUser} user={this.state.user} />
          <Header />
          <Content updateUser={this.updateUser} user={this.state.user} />
        </div>
      </Router>
    );
  }
}

export default App;
