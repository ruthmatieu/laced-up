import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoint';

const Footer = () => {
    return (
      <Container>
        <div className='width-container'>
        <ul>
          <li>Gift cards</li>
          <li>promotions</li>
          <li>find a store</li>
          <li>sign up for email</li>
          <li>become a member</li>
          <li>laced up journal</li>
          <li>send us feedback</li>
        </ul>
        </div>
      </Container>
    );
  }
  
  export default Footer;

  const Container = styled.footer`
  background-color: #111111;
  color: #FFF;
  padding: 50px 0;

  .width-container {
    max-width: 1920px;
    margin: 0 auto;
  }

  li {
    text-transform: uppercase;
    list-style: none;
    text-align: left;
    padding: 10px 0;
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