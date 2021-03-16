import React, { useState, useEffect } from "react";
import {Switch, Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from './breakpoint';
import { data } from './data';
import Cart from './components/Cart';
import Home from './components/Home';
import Shop from './components/Shop';
import Shoe from './components/Shoe';
import Login from './components/user/Login';
import Register from './components/user/Register';
import logo from './images/logo.png'
import './App.css';

//icons
import { GrCart } from 'react-icons/gr';
const App = () => {
  const [cart, setCart] = useState([]);

  //adds users selected item
  const addToCart = (product, qty) => {
    const item = {product, qty}
    setCart([...cart, item]);
    console.log(`${product} has been added to cart.`)    
  }
  console.log('Selected Items:', cart)

  //totals up item costs
  const totalPrice = cart.reduce((prev, curr) => {
    return prev + curr.product.price
  }, 0);
  console.log('total price: $',totalPrice)



  return (

      <Wrapper className='App'>
        <header>
          <nav>
                <div className='nav-items'>
                  <img src={logo} alt='logo' className='logo'/>
                  <MenuLink to='/'><p>Home</p></MenuLink>
                  <MenuLink to='/shop'><p>New Releases</p></MenuLink>
                  <MenuLink to='/shop'><p>Men</p></MenuLink>
                  <MenuLink to='/shop'><p>Women</p></MenuLink>
                  <MenuLink to='/shop'><p>All Shoes</p></MenuLink>
                </div>
                <div className='menu__btns'>
                  {cart.length > 0 ? 
                    <div>
                      <MenuLink to='/cart'><GrCart size={30}/></MenuLink>
                      <Link to='/cart'>
                        <div className='cart-notifications'>
                          <span className='cart-item-num'>{cart.length}</span>
                        </div>
                      </Link>
                    </div>
                   :
                    <MenuLink to='/cart'><GrCart size={30}/></MenuLink>
                  }
                  <MenuLink to='/membership'><button className='nav-btn'>Join us</button></MenuLink>
                  <MenuLink to='/sign-in'><button className='nav-btn'>Sign in</button></MenuLink> 
              </div>
          </nav>
        </header>
        <Switch>
          <Route exact path='/'>
            <Home data={data}/>
          </Route>
          <Route exact path='/shoe/:id'>
            <Shoe data={data} addToCart={addToCart} cartItems={cart}/>
          </Route>
          <Route exact path='/shop'>
            <Shop data={data} addToCart={addToCart}/>
          </Route>
          <Route exact path='/cart'>
            <Cart length={cart.length} cartItems={cart} totalPrice={totalPrice}/>
          </Route>
          <Route exact path='/sign-in' component={Login}/>
          <Route exact path='/membership' component={Register}/>
        </Switch>

      </Wrapper>

        


  );
};

export default App;


const Wrapper = styled.div`

  .width-container {
    //max-width: 1920px;
    //margin: 0 auto;
  }

    .logo {
      width: 50px;
      height: 50px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    nav {
      display: flex;
      //display: none;
      justify-content: space-between;
    }

    .nav-items {
      display: flex;
    }

    .menu__btns {
      display: flex;
      position: relative;
    }
   .nav-header {
     display: flex;
     justify-content: space-between;
   }
   .desktop-links {
     display: none;
   }

   .show-links {
    display: block;
   }

   .cart-notifications {
     position: absolute;
     left: 80px;
     bottom: 40px;
     background-color: crimson;
     color: white;
     border-radius: 50%;
     text-align: center;
     height: 25px;
     width: 25px;

   }

   .cart-item-num {
     font-size: 12px;
   }
   button {
    background-color: #111;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
  }

  button:hover {
    pointer: cursor;
  }
    

    @media only screen and ${breakpoint.device.desktop} {
     //background-color: red;

      .nav-header {
        display: flex;
        justify-content:
      }

      .logo {
        width: 50px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }

      .nav-links {
        //display:none;
      }

      .nav-center {
        display: flex;
        justify-content: space-between;
      }

      .desktop-links {
        display: block;
        display: flex;

      }

      .nav-items {
        display: flex;
        
      }

      .toggle-icon {
        display: none;
      }

      .menu__btns {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 50px;
      }

      .menu__btns button {
        cursor: pointer;
      }

      .cart-notifications {
        position: absolute;
        left: 80px;
        bottom: 40px;
        background-color: crimson;
        color: white;
        border-radius: 50%;
        text-align: center;
        height: 25px;
        width: 25px;
   
      }
    }

  `;

  const MenuLink = styled(Link)`
    text-decoration: none;
    color: #131921;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;

    @media only screen and ${breakpoint.device.desktop} {
      

    }
  `
//

