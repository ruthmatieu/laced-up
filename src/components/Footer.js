import React from 'react';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

const Footer = () => {
    return (
      <Container>
        <ul>
          <li>Gift cards</li>
          <li>promotions</li>
          <li>find a store</li>
          <li>sign up for email</li>
          <li>become a member</li>
          <li>laced up journal</li>
          <li>send us feedback</li>
        </ul>
      </Container>
    );
  }
  
  export default Footer;

  const Container = styled.footer`
  background-color: #111111;
  color: #FFF;
  padding: 50px 0;

  li {
    text-transform: uppercase;
    list-style: none;
    text-align: left;
    padding: 10px 0;
  }

    @media only screen and ${breakpoint.device.tablet} {

    }
  }`