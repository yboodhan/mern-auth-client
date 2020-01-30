// Import packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

// Resources and custom components
import './App.css';
import Content from './content/Content'
import Footer from './nav/Footer'
import Header from './nav/Header'
import Nav from './nav/Nav'

const App = () => {
  // Declare state variables
  let [user, setUser] = useState(null)

  // Define any onload actions (e.g., to look for the token)
  useEffect(() => {
    console.log('check for token')
    decodeToken()
  }, [])

  // Helper function to update the user (login, sign-up, and logout use this)
  const updateUser = (newToken) => {
    if (newToken) {
      // Save the token
      localStorage.setItem('userToken', newToken)
      // Update the user with the token's info
      decodeToken(newToken)
    } else {
      setUser(null)
    }
  }

  // Helper function to decode existing tokens
  const decodeToken = (existingToken) => {
    let token = existingToken || localStorage.getItem('userToken')

    console.log('The token is:', token) // If null, no user logged in
    // Decode token
    if (token) {
      let decoded = jwtDecode(token)

      // If the token cannot be decoded or it is expired, NO USER!
      if (!decoded || Date.now() > decoded.exp * 1000) {
        console.log('Expired or bad token.')
        setUser(null)
      } else {
        // This is the user data
        console.log('Good token')
        setUser(decoded)
      }
    } else {
      setUser(null)
    }
  }

  return (
    <Router>
      <div className="App">
        <Nav user={user} updateUser={updateUser}/>
        <Header />
        <main>
          <Content user={user} updateUser={updateUser}/>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
