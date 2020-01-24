// Import packages
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'

// Resources and custom components
import './App.css';
import Content from './content/Content'
import Footer from './nav/Footer'
import Header from './nav/Header'
import Nav from './nav/Nav'

const App = props => {
  // Declare state variables
  let [user, setUser] = useState(null)

  // Define any onload actions (e.g., to look for the token)
  useEffect(() => {
    console.log('check for token')
  }, [])

  // Helper function to update the user
  const updateUser = (newToken) => {
    if (newToken) {
      // Save the token and update the user with the token's info
      
    }
  }

  // Helper function to decode existing tokens

  return (
    <Router>
      <div className="App">
        <Nav />
        <Header />
        <main>
          <Content />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
