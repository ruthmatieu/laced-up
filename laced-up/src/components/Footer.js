import React from 'react';

const Footer = () => {

  //find li styles in index.css
  
    return (
      <footer style={{backgroundColor: '#111111'}}>
        <div className='footer__container'>

          <div>
            <ul>
              <li>gift cards</li>
              <li>promotions</li>
              <li>find a store</li>
              <li>sign up for email</li>
              <li>become a member</li>
              <li>laced up journal</li>
              <li>send us feedback</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>get help</li>
              <li>shipping and delivery</li>
              <li>returns</li>
              <li>payment options</li>
              <li>gift card balance</li>
              <li>contact us</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>about laced up</li>
              <li>news</li>
              <li>careers</li>
              <li>investors</li>
              <li>purpose</li>
              <li>sustainability</li>
            </ul>
          </div>

          <div>
            sm icon
            sm icon
            sm icon
            sm icon
          </div>

        </div>
      </footer>
    );
  }
  
  export default Footer;