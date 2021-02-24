import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import * as yup from 'yup';
import styled from 'styled-components';

import Footer from './Footer';
import logo from '../images/logo.png';

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

    document.title = 'LacedUp | My Account';

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
        <div>
        <Wrapper>
            <form onSubmit={submitHandler}>
                <img src={logo} alt='company logo' style={{width: '35px'}}/>
                <h2 style={{textTransform: 'uppercase'}}>Your account for<br/> everything Laced Up</h2>
                <div className='input-wrapper'>
                <label htmlFor='email'>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={form.email}
                        onChange={changeHandler}
                        placeholder='Email address'
                    />
                    {(errorState.email.length > 0) ? <p className='error'>{errorState.email}</p>: null}
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
                    {(errorState.password.length > 0) ? <p className='error'>{errorState.password}</p>: null}
                </label>
                </div>
                
                <br/>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <label htmlFor='isSignedIn' style={{display: 'flex'}}>
                        <input
                            type='checkbox'
                            id='isSignedIn'
                            name='isSignedIn'
                            value={form.checkbox}
                        />
                        <p style={{ margin: '0', fontSize: '13px', color: '#767676'}}>Keep me signed in</p>
                    </label>
                    <p style={{ margin: '0', fontSize: '13px', color: '#BFBFBF'}}>Forgot password?</p>
                </div>
                
                
                <br/>
                <p style={{fontSize: '13px', color: '#767676'}}>By logging in, you agree to Laced Up's Privacy Policy and Terms of Use.</p>
                <button type='submit' className='submit'>Sign in</button>
                <p style={{fontSize: '13px', color: '#767676'}}>Not a member? <Link to='/membership' style={{color: '#000'}}>Join Us</Link>.</p>
            </form>
            
        </Wrapper>
        
            <Footer/>
        </div>
    )
}

export default Login;

const Wrapper = styled.div`
    padding: 150px 0 150px 0;
    max-width: 500px;
    margin: 0 auto;
      

    label {
        display: grid;
        place-items: center;
    }

    input[type='email'] {
        width: 100%;
        height: 40px;
        border: 1px solid #E5E5E5;
        border-radius: 3px;
        padding: 0 16px;
    }

    input[type='password'] {
        width: 100%;
        height: 40px;
        border: 1px solid #E5E5E5;
        border-radius: 3px;
        padding: 0 16px;
    }

    .input-wrapper {
        margin: 0 20px;
    }

      .error {
          margin: 0;
          color: red;
          font-size: 13px;
          text-align: left;
      }

      .submit {
        border: 1px solid #E5E5E5;
        background-color: black;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        color: white;
        border-radius: 5px;
        padding: 12px 0;
        Width: 100%;
      }
`;