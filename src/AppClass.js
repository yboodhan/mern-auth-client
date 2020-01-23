// Import packages
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

// Resources and custom components
import './App.css';
import Content from './content/Content'
import Footer from './nav/Footer'
import Header from './nav/Header'
import Nav from './nav/Nav'

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

      // If token is expired or not decodable, user is not logged in
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

  render() {
    return (
      <Router>
        <div className="App">
          <Nav updateUser={this.updateUser} user={this.state.user} />
          <Header />
          <Content updateUser={this.updateUser} user={this.state.user} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
