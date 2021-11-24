import React from "react";
import styled from "styled-components";
import breakpoint from '../../breakpoints';
import { Link } from "react-router-dom";

const MemberFirstAccess = () => {
    return (
        <MemberContainer className="w-full mt-8 md:mt-20 relative">
            <h2 className="mb-4 text-lg md:text-2xl font-medium">Member First Access</h2>
            <Link to='/register'>
                <div className="content-box"></div>
            </Link>
            <div className="member-content text-center w-full px-4">
                <h3 className="text-2xl md:text-5xl font-bold mb-2 md:mb-4">SHOP HOLIDAY STYLES</h3>
                <p className="mb-2 md:mb-4 text-sm md:text-lg">Make your holidays extra easy. Free shipping for LacedUp Members.</p>
                <Link to="/"><p className="text-sm md:text-lg"><span className="underline-span">Shipping & Pickup Options</span></p></Link>
            </div>
        </MemberContainer>
    )
};

export default MemberFirstAccess;

const MemberContainer = styled.section`
    .underline-span {
        color: black;
        padding-bottom: 4px;
        border-bottom: 1px solid black;
    }
    .content-box {
        width: 100%;
        height: 220px;
        background-color: #F4E7E1;

        @media only screen and ${breakpoint.device.sm} {
            
        }

        @media only screen and ${breakpoint.device.md} {
            //color: green;
            height: 350px;
        }

        @media only screen and ${breakpoint.device.lg} {
            //color: black;
        }

        @media only screen and ${breakpoint.device.xl} {
            width
        }
    }
    .member-content {

        position: absolute;
        bottom: 22%;

        @media only screen and ${breakpoint.device.sm} {
            bottom: 26%;
            //color: yellow;
        }

        @media only screen and ${breakpoint.device.md} {
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