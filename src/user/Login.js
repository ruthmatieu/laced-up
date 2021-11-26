import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import Nav from "../components/nav";
import ShippingBanner from "../components/nav/ShippingBanner";
import Footer from '../components/footer';
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

    const history = useNavigate();
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
            <Nav/>
            <ShippingBanner/>
        <Wrapper className="py-20 md:py-40">
            <form onSubmit={submitHandler}>
                <img src={logo} alt='company logo' style={{width: '35px', display: 'block', margin: '0 auto'}}/>
                <h2 className="text-xl md:text-2xl font-bold leading-none my-10 uppercase text-center">Your account for<br/> everything Laced Up</h2>
                <div className="mx-5 -space-y-2">
                    <label htmlFor='email' className="grid place-items-center">
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
                    <label htmlFor='password' className="grid place-items-center">
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
                <div className="mx-5 flex justify-between">
                    <label htmlFor='isSignedIn' className="flex">
                        <input
                            type='checkbox'
                            id='isSignedIn'
                            name='isSignedIn'
                            value={form.checkbox}
                        />
                        <p  className="text-xs pl-2" style={{ margin: '0',color: '#767676'}}>Keep me signed in</p>
                    </label>
                    <p className="text-xs" style={{ margin: '0', color: '#BFBFBF'}}>Forgot password?</p>
                </div>
                
                
                <br/>
                <p className="mx-14 text-center text-xs pb-8" style={{color: '#767676'}}>By logging in, you agree to Laced Up's <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use</span>.</p>
                <div className="px-5 flex flex-col items-center justify-center" style={{margin: '0 auto'}}>
                    <button className="mx-5 submit" type='submit'>Sign in</button>
                    <p className="text-xs my-4" style={{color: '#767676'}}>Not a member? <Link to='/membership' style={{color: '#000'}}>Join Us</Link>.</p>
                </div>
                
            </form>
            
        </Wrapper>
        
            <Footer/>
        </div>
    )
}

export default Login;

const Wrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
      
  
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
      @media only screen and ${breakpoint.device.md} {
        max-width: 500px;
        margin: 0 auto;
      }
`;