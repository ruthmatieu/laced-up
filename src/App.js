//APPLY A MARGIN OF 15PX ALL OVER APP

import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import styled from 'styled-components';
import breakpoint from './breakpoints';
import { allShoes } from './data';
import { menShoes } from './data';
import { womenShoes } from './data';
import { latestAndGreatest } from './data';
import { clearance } from './data';

//components
import Homepage from './components/Homepage';
import NewReleases from './components/NewReleases';
import MensShoes from './components/MensShoes';
import WomensShoes from './components/WomensShoes';
import AllShoes from './components/AllShoes';
import Clearance from './components/Clearance';
import Shoe from './components/Shoe';
import Register from './components/Register';
import Login from './components/Login';
import ConfirmedMembership from './components/ConfirmedMembership';
import Cart from './components/Cart';
//import Menu from './components/mobile menu/Menu';
//images
import logo from './images/logo.png';



const App = () => {

const [shoeList] = useState(allShoes);
const [menShoeList] = useState(menShoes);
const [womenShoeList] = useState(womenShoes);
const [newRelease] = useState(latestAndGreatest);
const [clearanceShoes] = useState(clearance);

//shopping cart state
  const [cartItems] = useState([]);


  const toggleMenu = (e) => {
    const links = document.querySelector('.nav-links')
    e.preventDefault();
    console.log('The link was clicked.');

      if(links.classList.contains('.nav-links')){
        links.classList.remove('nav-links');
        links.classList.add('show-links');
      } else {
        links.classList.remove('show-links');
        links.classList.add('nav-links');
      }
    
  }

  return (
    <Wrapper className="App">
      <header>

        <nav>
          <div className='nav-center'>
            <div className='nav-header'>
              <Link to='/'><img src={logo} alt='Company logo' className='logo'/></Link>
                
                <div className='toggle-icon' onClick={toggleMenu}>
                  <GiHamburgerMenu size={30}/>
                </div>
            </div>
            <div className='nav-links desktop-links'>
              <div className='nav-items'>
                <MenuLink to='/'><p>Home</p></MenuLink>
                <MenuLink to='/new-releases'><p>New Releases</p></MenuLink>
                <MenuLink to='/mens-shoes'><p>Men</p></MenuLink>
                <MenuLink to='/womens-shoes'><p>Women</p></MenuLink>
                <MenuLink to='/all-shoes'><p>All Shoes</p></MenuLink>
              </div>
              <div className='menu__btns'>
                <MenuLink to='/membership'><button className='nav-btn'>Join us</button></MenuLink>
                <MenuLink to='/sign-in'><button className='nav-btn'>Sign in</button></MenuLink>
              </div>
            </div>
          </div>
        </nav>

      </header>


    
      <Switch>
        <ScrollToTop>
        <Route exact path='/'>
          <Homepage shoeList={shoeList}/>
        </Route>
        <Route path='/new-releases'>
          <NewReleases shoeList={newRelease}/>
        </Route>
        <Route path='/mens-shoes'>
          <MensShoes shoeList={menShoeList}/>
        </Route>
        <Route path='/womens-shoes'>
          <WomensShoes shoeList={womenShoeList}/>
        </Route>
        <Route exact path='/membership' component={Register}/>
        <Route path='/sign-in' component={Login}/>
        <Route path='/membership/success' component={ConfirmedMembership}/>
        <Route path='/clearance'>
          <Clearance shoeList={clearanceShoes}/>
        </Route>
        <Route path='/shoe/:id'>
          <Shoe key={shoeList.id} shoeList={shoeList}/>
        </Route>
        <Route path='/all-shoes'>
          <AllShoes shoeList={shoeList}/>
        </Route>
        <Route path='/cart'>
          <Cart cartItems={cartItems}/>
        </Route>
        </ScrollToTop>
      </Switch>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`

  .width-container {
    //max-width: 1920px;
    //margin: 0 auto;
  }

    .logo {
      width: 50px;
      display: block;
      margin-left: auto;
      margin-right: auto;
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
    }
  `;

  const MenuLink = styled(Link)`
    text-decoration: none;
    color: black;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;

    @media only screen and ${breakpoint.device.desktop} {
      

    }
  `
//
