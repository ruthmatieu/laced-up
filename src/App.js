import React, { useState, useEffect } from "react";
import {Switch, Link, Route} from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from './breakpoint';
import Cart from './client/components/Cart';
import Men from './client/components/products/MenShoes';
import Women from './client/components/products/WomenShoes';
import Shop from './client/components/Shop';
import NewRelease from './client/components/products/NewRelease';
import Shoe from './client/components/Shoe';
import Home from './client/components/NewHome';
import Login from './client/user/Login';
import Register from './client/user/Register';
import logo from './images/logo.png';
import './App.css';

//icons
import { GrCart } from 'react-icons/gr';
import Navigation from "./client/components/Navigation";
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
          <Link to='/'><img src={logo} alt='logo' className='logo'/></Link>
          <div className='nav-mobile-icons'>
          {cart.length > 0 ?
                <div className='cart-items'>
                    <MenuLink to='/cart'><GrCart size={25} style={{color: 'red'}}/></MenuLink>
                    <Link to='/cart' >
                        <div className='cart-notifications'>
                        <span className='cart-item-num'>{cart.length}</span>
                        </div>
                    </Link>
                </div>
                    :
                <div className='cart-items'>
                    <MenuLink to='/cart'><GrCart size={25} style={{color: 'red'}}/></MenuLink>
                </div>
                }
          <Navigation cart={cart}/>
          </div>
        </header>

        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/men-shoes'>
            <Men addToCart={addToCart}/>
          </Route>
          <Route exact path='/women-shoes'>
            <Women addToCart={addToCart}/>
          </Route>
          <Route exact path='/new-releases'>
            <NewRelease addToCart={addToCart}/>
          </Route>
          <Route exact path='/shoe/:id'>
            <Shoe addToCart={addToCart} cartItems={cart}/>
          </Route>
          <Route exact path='/all-shoes'>
            <Shop addToCart={addToCart}/>
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

  header {
    display: flex;
    justify-content: space-between;
    max-width: 1920px;
        margin: 0 auto;
  }

  .logo {
    width: 50px;
    height: 50px;
    display: block;
    margin-left: 20px;
    // margin-left: auto;
    // margin-right: auto;
  }

  .nav-mobile-icons {
    display: flex;
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

  .cart-notifications {
    position: absolute;
    right: 80px;
    top: 10px;
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
    

    @media only screen and ${breakpoint.device.desktop} {
     //background-color: red;
     
      

      .logo {
        width: 50px;
        display: block;
        // margin-left: auto;
        // margin-right: auto;
      }

      .cart-items {
        display: none;
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

