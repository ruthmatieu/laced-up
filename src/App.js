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
  // const onAdd = (product) => {
  //   const exist = cartItems.find(item => item.id === product.id);
  //   if(exist) {
  //     setCartItems(cartItems.map())
  //   }
  // }

  // const menuHandler = () => {

  // }

  return (
    <Wrapper className="App">
      <header>
      <nav className='desktop__nav'>
            <Link to='/'><img src={logo} alt='company logo' className='logo'/></Link>

            <div className='menu__items' style={{alignItems: 'center', justifyContent: 'space-between'}}>
              <div className='menu__items' style={{alignItems: "center"}}>
                <Link to='/' style={{textDecoration: 'none', color: 'black', fontWeight: '700', padding: '0 5px'}}><p>Home</p></Link>
                <Link to='/new-releases' style={{textDecoration: 'none', color: 'black', fontWeight: '700', padding: '0 5px'}}><p>New Releases</p></Link>
                <Link to='/mens-shoes' style={{textDecoration: 'none', color: 'black', fontWeight: '700', padding: '0 5px'}}><p>Men</p></Link>
                <Link to='/womens-shoes' style={{textDecoration: 'none', color: 'black', fontWeight: '700', padding: '0 5px'}}><p>Women</p></Link>
                <Link to='/all-shoes' style={{textDecoration: 'none', color: 'black', fontWeight: '700', padding: '0 5px'}}><p>All Shoes</p></Link>
              </div>
              <div className='menu__btns'>
                  <Link to='/membership'><button className='nav-btn'>Join us</button></Link>
                  <Link to='/sign-in'><button className='nav-btn'>Sign in</button></Link>
              </div>
            </div>
        </nav>

        <nav className='mobile__nav'>
          <Link to='/'><img src={logo} alt='company logo' className='logo'/></Link>
          <GiHamburgerMenu className='open-menu'/>
          <div className='main-menu'>
            <div>
              <MenuLink to='/new-releases'>New Releases</MenuLink>
              <MenuLink to='/mens-shoes'>Men</MenuLink>
              <MenuLink to='/womens-shoes'>Women</MenuLink>
              <MenuLink to='/all-shoes'>All Shoes</MenuLink>
            </div>
            <div className=''>
              <MenuLink to='/cart'>Bag</MenuLink>
              <MenuLink to='/womens-shoes'>Favorites</MenuLink>
              <MenuLink to='/all-shoes'>Help</MenuLink>
            </div>
          </div>
          <GrClose className='closed-menu'/>
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

    .logo {
      width: 50px;
      margin-left: 15px;
    }

    .mobile__nav {
      display: flex;
      justify-content: space-between;
    }

    .mobile__nav .logo {
      width: 45px;
      padding: 10px 0;
    }

    .main-menu {
      display: flex;
    }

    .open-menu {
      cursor: pointer;
      color: red;
    }

    .closed-menu {
      display: none;
      cursor: pointer;
    }

    .main-menu, .closed-menu {
      display: none;
    }

    .menu-icon {
      display: grid;
      place-items: center;
      height: 55px;
      width: 25px;
      cursor: pointer;

    }

    .desktop__nav {
      display: none;
    }

    @media only screen and ${breakpoint.device.desktop} {
      .mobile__nav {
        display: none;
        
      }
      .desktop__nav {
        display: block;
        display: flex;
        justify-content: space-between;
        padding: 10px 80px;
        align-items: center;
      }

      .menu__items {
        display: flex;
        justify-content: space-between;
        
      }
  
      .menu__items p {
        margin: 0;
        
      }
  
      .menu__btns {
      }
      
      .nav-btn {
        margin-left: 10px;
      }
    }
  `;

  const MenuLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: black;
    padding: 15px;
    text-transform: uppercase;
    font-size: 15px;
  `
//
