import React, { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';


export default function Login() {
    const [profileLogin, setProfileLogin] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_PROFILE);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setProfileLogin({
            ...profileLogin,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(profileLogin)

        try {
            const { data } = await login({
                variables: { ...profileLogin },
            });

            Auth.login(data.login.token)
        } catch (e) {
            console.error(e)
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
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                </p>
            ) : (
                <form className="login-form" onSubmit={handleFormSubmit}>

                    <input 
                    placeholder="Email" 
                    name="email" type="email"
                    id="email" 
                    value={profileLogin.email} 
                    onChange={handleChange} />


                    <input 
                    placeholder="*******" 
                    name="password" 
                    type="password" 
                    id="password" 
                    value={profileLogin.password} 
                    onChange={handleChange} />

                    <button
                    className="btn btn-block btn-info"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                    >
                    Submit
                    </button>

                </form>
            )}

            <h3>Don't have an account? <a href="/signup">Sign up</a></h3>
        </>
    )
}