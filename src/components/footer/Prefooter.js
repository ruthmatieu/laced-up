import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import breakpoint from '../../breakpoints';
import logo from "../../images/logo.png";

const Prefooter = () => {
    return (
        <MemberContainer className="w-full mt-8 md:mt-10 relative" style={{textAlign: 'center'}}>
            <Link to='/register'>
                <div className="content-box"></div>
            </Link>
            <div className="member-content text-center w-full px-4">
                <img src={logo} alt='company logo' className="prefooter-logo"/>
                <div className="py-4 md:py-10">
                    <p className="pb-4 md:pb-10 text-4xl sm:text-5xl md:text-6xl leading-10" style={{fontFamily: `'IBM Plex Serif', serif`}}>Where All <br/>Athletes Belong</p>
                    <p className="text-sm px-4 sm:px-16 lg:px-32 xl:px-64">Become a LacedUp Member. Get first and exclusive access to the newest styles & innovation, free shipping, birthday rewards and more.</p>
                </div>
                <div className="space-x-3 md:space-x-4 md:space-y-0">
                    <Link to='/membership'>
                        <button className="cta-btn1">Join Us</button>
                    </Link>
                    <Link to='/sign-in'>
                        <button className="cta-btn2">Log In</button>
                    </Link>
                </div>
            </div>

            
        </MemberContainer>

    )
}

export default Prefooter;

const MemberContainer = styled.section`
    .cta-btn1 {
        border: none;
        background-color: #111;
        font-size: 13px;
        color: #FFF;
        height: 2.5rem;
        border-radius: 25px;
        width: 6rem;
    }

    .cta-btn1:hover {
        background-color: #404040;
    }

    .cta-btn2 {
        border: none;
        background-color: #FFF;
        font-size: 13px;
        color: #111;
        height: 2.5rem;
        border-radius: 25px;
        width: 6rem;
    }

    .cta-btn2:hover {
        background: rgba(255, 255, 255, .6) 
    }
    .content-box {
        width: 100%;
        height: 550px;
        background-color: #F1F0EC;

        @media only screen and ${breakpoint.device.sm} {
            
        }

        @media only screen and ${breakpoint.device.md} {
            //color: green;
        }

        @media only screen and ${breakpoint.device.lg} {
            //color: black;
        }

        @media only screen and ${breakpoint.device.xl} {
            //width
        }
    }
    .member-content {

        position: absolute;
        bottom: 24%;

        .prefooter-logo {
            width: 60px;
            display: block;
            margin-left: auto;
            margin-right: auto;
        }

        @media only screen and ${breakpoint.device.sm} {
            //color: yellow;
        }

        @media only screen and ${breakpoint.device.md} {
            bottom: 16%;
            //color: green;
        }

        @media only screen and ${breakpoint.device.lg} {
            //color: black;
        }

        @media only screen and ${breakpoint.device.xl} {
            //color: red;
        }
    }
`