import React from 'react';
import styled from 'styled-components';
import breakpoint from '../../breakpoint';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialYoutubeCircular, TiSocialInstagramCircular } from 'react-icons/ti';

const Footer = () => {
    return (
      <Container>
        <div className='main-section'>
          <div className='menu'>
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
          <div className='socials'>
            <ul>
              <li><AiFillTwitterCircle size={35}/></li>
              <li><FaFacebook size={32}/></li>
              <li><TiSocialYoutubeCircular size={40}/></li>
              <li><TiSocialInstagramCircular size={38}/></li>
            </ul>
          </div>
        </div>
        
      </Container>
    );
  }
  
  export default Footer;

  const Container = styled.footer`
  background-color: #111111;
  color: #FFF;
  padding: 50px 0;
  font-size: 0.8rem;

  .main-section {
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .menu {
    display: flex;
  }

  li {
    text-transform: uppercase;
    list-style: none;
    text-align: left;
    padding: 10px 0;
  }

  li:hover {
    transition: 0.5s;
    cursor: pointer;
  }

  .secondary {
    color: #7E7E7E;
    font-size: 0.8rem;
    text-transform: capitalize;
    transition: 0.5s;
  }

  .secondary:hover {
    color: #fff;
    transition: 0.5s;
    cursor: pointer;
  }

  .socials {
    display: flex;
  }

  .socials ul {
    display: flex;
  }
    @media only screen and ${breakpoint.device.tablet} {

    }

    @media only screen and ${breakpoint.device.desktop} {
      li {
        text-transform: uppercase;
        list-style: none;
        text-align: left;
        padding: 10px 0;
      }
    }
  }`