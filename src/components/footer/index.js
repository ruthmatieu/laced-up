import React, {ReactNode} from "react";
import styled from "styled-components";
import breakpoint from '../../breakpoints';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialYoutubeCircular, TiSocialInstagramCircular } from 'react-icons/ti';

export const Footer = () => {
    return (
        <FooterContainer className="footer-container w-full mt-16 md:mt-32 text-white py-16" style={{backgroundColor: '#111111'}}>
            <div className='main-section md:flex justify-between px-10 xl:px-16 xxl:px-24 3xl:px-0' style={{maxWidth: '1750px', margin: '0 auto'}}>
                <div className='menu md:flex md:space-x-24 xxl:space-x-32'>
                    <ul>
                        <li>Gift cards</li>
                        <li>promotions</li>
                        <li>find a store</li>
                        <li>sign up for email</li>
                        <li>become a member</li>
                        <li>laced up journal</li>
                        <li>send us feedback</li>
                    </ul>
                    <ul>
                        <li>Get help</li>
                        <li className='secondary'>Order Status</li>
                        <li className='secondary'>Shipping and Delivery</li>
                        <li className='secondary'>Returns</li>
                        <li className='secondary'>Payment Options</li>
                        <li className='secondary'>Gift Card Balance</li>
                        <li className='secondary'>Contact Us</li>
                    </ul>
                    <ul>
                        <li>About LacedUp</li>
                        <li className='secondary'>News</li>
                        <li className='secondary'>Careers</li>
                        <li className='secondary'>Investors</li>
                        <li className='secondary'>Purpose</li>
                        <li className='secondary'>Sustainability</li>
                    </ul>
                </div>
                <div className='socials flex'>
                    <ul className="flex space-x-5">
                        <li className="mt-1"><AiFillTwitterCircle size={36}/></li>
                        <li className="mt-1"><FaFacebook size={32}/></li>
                        <li><TiSocialYoutubeCircular size={40}/></li>
                        <li><TiSocialInstagramCircular size={38}/></li>
                    </ul>
                </div>
            </div>
            <div className="px-10 xl:px-16 xxl:px-24 3xl:px-0 pt-10" style={{maxWidth: '1750px', margin: '0 auto'}}>
                <p className="copyright text-xs">@ 2021 LacedUp, Inc. All Rights Reserved</p>
            </div>
        </FooterContainer>
    )
}

export default Footer;

const FooterContainer = styled.footer`
    li {
        text-transform: uppercase;
        list-style: none;
        text-align: left;
        padding: 10px 0;
        font-size: 0.8rem;
    }

    li:hover {
        transition: 0.5s;
        cursor: pointer;
    }

    .socials ul li {
        filter: brightness(50%);
    }

    .socials ul li:hover {
        filter: brightness(100%);
    }

    .secondary, .copyright {
        color: #7E7E7E;
        text-transform: capitalize;
        transition: 0.5s;
    }

    .secondary {
        font-size: 0.87rem;
    }

    .secondary:hover {
        color: #fff;
        transition: 0.5s;
        cursor: pointer;
    }

    .footer {
        //color: red;
        position: absolute;
        top: 35%;

        @media only screen and ${breakpoint.device.sm} {
            //color: blue;
        }

        @media only screen and ${breakpoint.device.md} {
            //color: green;
        }

        @media only screen and ${breakpoint.device.lg} {
            //color: black;
        }

        @media only screen and ${breakpoint.device.xl} {
            //color: yellow;
        }

    }
`