import React, { useState } from 'react';
import './signup.css'
import { Link } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { ADD_PROFILE } from '../utils/mutations'

import Auth from '../utils/auth'

export default function Signup() {
  const [profileSignup, setProfileSignup] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  const handleChange = (event) => {
    console.log(event)
    const { name, value } = event.target;

    setProfileSignup({
      ...profileSignup,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProfile({
        variables: { ...profileSignup },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
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
      <div>
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className="signup-form " onSubmit={handleFormSubmit}>
            <input placeholder="First Name"
              type="text"
              name="firstName"
              id="fname"
              required
              value={profileSignup.firstName}
              onChange={handleChange}
            />

            <input placeholder="Last Name"
              type="text"
              name="lastName"
              id="lname"
              required
              value={profileSignup.lastName}
              onChange={handleChange}
            />

            <input placeholder="Username"
              type="username"
              name="username"
              id="username"
              required
              value={profileSignup.username}
              onChange={handleChange}
            />

            <input placeholder="Email"
              type="email"
              name="email"
              id="email"
              required
              value={profileSignup.email}
              onChange={handleChange}
            />

            <input placeholder="Password"
              type="password"
              name="password"
              id="password"
              required
              value={profileSignup.password}
              onChange={handleChange}
            />

            <input placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirm-password"
              required
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        )}
        <h3>Already have an account? <a href="/login">Log in</a></h3>
      </div>
    </>
  )
}