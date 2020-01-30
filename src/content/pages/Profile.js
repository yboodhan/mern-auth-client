import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Profile = props => {

  // Declare and initialize state
  let [serverMessage, setServerMessage] = useState('')

  const callServer = () => {
    let token = localStorage.getItem('userToken')
    console.log('token is', token)

    fetch(`${process.env.REACT_APP_SERVER_URL}/auth/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then( response => {
      response.json().then( result => {
        if (response.ok) {
          console.log('YAY', result)
          setServerMessage(result.message)
        } else {
          console.log('Error:', result)
          setServerMessage('No, no, no, not in my house! Get an account first!')
        }
      })
      .catch(err => {
        console.log('Error:', err)
      })
    })
    .catch(err => {
      console.log('Error:', err)
    })
  }
  // If there is not a user, send em away!
  if (!props.user) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <h2>{props.user.firstname}'s Profile</h2>
      <h3>{props.user.firstname} {props.user.lastname}</h3>
      <img alt="profile" src={props.user.profileUrl} />
      <p>
        <strong>Email:</strong>
        {props.user.email}
      </p>
      <button onClick={callServer}>Call /profile route on server</button>
      <p>{serverMessage}</p>
    </div>
  )
}

export default Profile
