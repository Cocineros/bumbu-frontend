import React, { useState } from 'react';
import './signup.css'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ADD_PROFILE } from '../utils/mutations'
import LoginModal from '../login-modal/LoginModal'

import Auth from '../utils/auth'

export default function Signup() {
  const [profileSignup, setProfileSignup] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formError, setFormError] = useState(false)

  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  const handleChange = (event) => {
    console.log(event)
    const { name, value } = event.target;

    setProfileSignup({
      ...profileSignup,
      [name]: value,
    });
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (profileSignup.password !== profileSignup.confirmPassword) {
      setProfileSignup({
        ...profileSignup,
        password: '',
        confirmPassword: ''
      })
      setFormError(true)
      return;
    }

    setFormError(false)

    try {
      const { data } = await addProfile({
        variables: { ...profileSignup },
      });

      Auth.login(data.addProfile.token);
    } catch (error) {
      console.error(error);
    }

    setProfileSignup({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    })
  };

  return (
    <>
      <div className='modal'>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className="signup-form " onSubmit={handleFormSubmit}>
            <input className="input-fn-ln input"
            placeholder="First Name"
              type="text"
              name="firstName"
              id="fname"
              required
              value={profileSignup.firstName}
              onChange={handleChange}
            />

            <input 
            className="input-fn-ln input"
            placeholder="Last Name"
              type="text"
              name="lastName"
              id="lname"
              required
              value={profileSignup.lastName}
              onChange={handleChange}
            />

            <input 
            className="input"
            placeholder="Username"
              type="username"
              name="username"
              id="username"
              required
              value={profileSignup.username}
              onChange={handleChange}
            />

            <input 
            className="input"
            placeholder="Email"
              type="email"
              name="email"
              id="email"
              required
              value={profileSignup.email}
              onChange={handleChange}
            />

            <input 
            className="input"
            placeholder="Password"
              type="password"
              name="password"
              id="password"
              required
              value={profileSignup.password}
              onChange={handleChange}
            />

            <input 
            className="input"
            placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirm-password"
              required
              value={profileSignup.confirmPassword}
              onChange={handleChange}
            />
            {formError && <div className='signupErr'>Passwords don't match, please try again!</div>}

            <button
                    className="btn"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                    >Signup</button>
          </form>
        )}
      </div>
    </>
  )
}