import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_PROFILE } from '../utils/mutations';
import Dashboard from '../dashboard/dashboard'

import Auth from '../utils/auth';


export default function Login() {
    const [profileLogin, setProfileLogin] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_PROFILE);
    const [loginError, setLoginError] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProfileLogin({
            ...profileLogin,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...profileLogin },
            });

            Auth.login(data.login.token)
        } catch (error) {
            setLoginError(true)
        }

        setProfileLogin({
            email: '',
            password: '',
        });
    };

    return (
        <>
            {data ? (
                <p>
                Success! You may now head to the dashboard.
            </p>
            ) : (
                <div id="login-form-container">
                    {loginError && <div className='loginErr'>Your credentials are incorrect, please try again!</div>}

                <form className="login-form" onSubmit={handleFormSubmit}>

                    <input 
                    className="input"
                    placeholder="Email" 
                    name="email" type="email"
                    id="email" 
                    value={profileLogin.email} 
                    onChange={handleChange} />


                    <input 
                    className="input"
                    placeholder="Password" 
                    name="password" 
                    type="password" 
                    id="password" 
                    value={profileLogin.password} 
                    onChange={handleChange} />

                    <button
                    className="btn"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                    >
                    Login
                    </button>

                </form>
            </div>
            )}
            </>
    )
}