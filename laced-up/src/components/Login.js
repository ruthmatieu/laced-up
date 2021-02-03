import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';

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

const formSchema = yup.object().shape({
    email: yup.string()
        .required('Please enter a valid email address.'),
    password: yup.string()
        .required('Please enter a password.')
        .min(5, '5 characters minimum required.'),
    checkbox: yup.boolean()
        
});



const Login = () => {

    const history = useHistory();
    const [form, setForm] = useState(data);
    const [errorState, setErrorState] = useState(error)


    const validation = e => {
        yup.reach(formSchema, e.target.name)
            .validate(e.target.value)
                .then (item => {
                    setErrorState({
                        ...errorState,
                        [e.target.name]: ''
                })
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [e.target.name]: err.errors[0]
                })
            })
    }

    const changeHandler = e => {
        e.persist();
        validation(e);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        setForm({
            email: '',
            password: '',
            checkbox: false
        })
        history.push('/')
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
                        value={form.email}
                        onChange={changeHandler}
                        placeholder='Email address'
                    />
                    {(errorState.email.length > 0) ? <p>{errorState.email}</p>: null}
                </label>
                <br/>
                <label htmlFor='password'>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={form.password}
                        onChange={changeHandler}
                        placeholder='Password'
                    />
                    {(errorState.password.length > 0) ? <p>{errorState.password}</p>: null}
                </label>
                
                <br/>
                <div>
                    <label htmlFor='isSignedIn'>
                        <input
                            type='checkbox'
                            id='isSignedIn'
                            name='isSignedIn'
                            value={form.checkbox}
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