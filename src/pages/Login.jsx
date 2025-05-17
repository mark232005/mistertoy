import { TextField } from '@mui/material'
import { useState } from 'react'
import { userService } from '../services/user.service'
import { login, signup } from '../store/user/user.actions.js'
export function LogPage() {
    const [isSignup, setIsSignup] = useState(false)
    const [credentials, setCredentials] = useState(userService.getEmptyCredentials())




    function handleInput({ target }) {
        const { name, value } = target
        setCredentials(prev => ({ ...prev, [name]: value }))
    }
    async function _login(credentials) {
        try {
            await login(credentials)
        } catch (err) {
            throw err
        }
    }
    async function _signup(credentials) {
        try {
            await signup(credentials)
        } catch (err) {
            throw err

        }
    }
    return (
        <section className="login-page flex">
            <h2>Welcome back</h2>
            <div className="login-input flex">
                <TextField id="outlined-basic" label="UserName" variant="outlined"
                    name="userName"
                    value={credentials.userName}
                    onChange={handleInput}
                />
                <TextField
                    label="password"
                    type="password"
                    variant="outlined"
                    name="password"
                    value={credentials.password}
                    onChange={handleInput}
                />
                {
                    isSignup &&
                    <TextField id="outlined-basic" label="Full-name" variant="outlined"
                        name="fullName"
                        value={credentials.fullName}
                        onChange={handleInput}
                    />
                }

            </div>
                {isSignup ?
                    <button className='login-btn' onClick={() => _signup(credentials)}>
                        Sign up
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button> :
                    <button className='login-btn' onClick={() => _login(credentials)}>
                        Login
                        <div className="arrow-wrapper">
                            <div className="arrow"></div>
                        </div>
                    </button>
                }
            {!isSignup && <p> Forgot your password?</p>}
            <p>{isSignup ? 'Already a member?' : 'Dont have an account'} <span className="login-span" onClick={() => setIsSignup(prev => !prev)}>{isSignup ? 'login' : 'sign up'}</span></p>


        </section>

    )
}

//'Already a member?'