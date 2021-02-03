import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const data = {
    email: '',
    password: '',
    checkbox: false
}

const error = {
    email: '',
    password: '',
    checkbox: false
}

const Login = () => {

    const history = useHistory();
    const [form, setForm] = useState(data)

    const changeHandler = e => {
        e.persist();
        
    }

    const submitHandler = e => {
        e.preventDefault();
        setForm({
            email: '',
            password: '',
            checkbox: false
        })
        history.push('/membership/success')
    }

    return (
        <div onSubmit={submitHandler}>
            <form>
                <img src='' alt='company logo'/>
                <h1>Your account for<br/> everything Lace Up</h1>
                <label htmlFor='email'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={data.email}
                        onChange=''
                        placeholder='Email address'
                    />
                </label>
                <br/>
                <label htmlFor='password'>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={data.password}
                        onChange=''
                        placeholder='Password'
                    />
                </label>
                <br/>
                <div>
                    <label htmlFor=''>
                        <input
                            type='checkbox'
                            id='isSignedIn'
                            name='isSignedIn'
                            value={data.checkbox}
                            onChange=''
                        />
                        Keep me signed in
                    </label>
                    <p>Forgot password?</p>
                </div>
                
                <br/>
                <p>By logging in, you agree to Lace Up's Privacy Policy and Terms of Use.</p>
                <button type='submit'>Sign in</button>
                <p>Not a member? <Link to='/membership'>Join Us</Link>.</p>
            </form>
        </div>
    )
}

export default Login;