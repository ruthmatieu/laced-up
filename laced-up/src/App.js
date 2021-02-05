//APPLY A MARGIN OF 15PX ALL OVER APP

import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
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
import Menu from './components/mobile menu/Menu';
//images
import logo from './images/logo.png';



const App = () => {

const [shoeList] = useState(allShoes);
const [menShoeList] = useState(menShoes);
const [womenShoeList] = useState(womenShoes);
const [newRelease] = useState(latestAndGreatest);
const [clearanceShoes] = useState(clearance);

  const Wrapper = styled.div`

    .logo {
      width: 50px;
      margin-left: 15px;
    }

    .mobile__nav {
      margin: 0 15px;
      display: flex;
      justify-content: space-between;
    }

    .mobile__menu__container {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
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
        padding: 10px 0;
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
    }
  `;
//
  
const Nav = styled.nav `
  // background-color: red;
  

  @media only screen and ${breakpoint.device.desktop} {
    // background-color: yellow;
  }
`;

  const menuHandler = () => {

  }

  return (
    <Wrapper className="App">
      <header>
      <Nav className='desktop__nav'>
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
                  <Link to='/membership'><button>Join us</button></Link>
                  <Link to='/sign-in'><button>Sign in</button></Link>
              </div>
            </div>
        </Nav>

        <nav className='mobile__nav'>
          <Link to='/'><img src={logo} alt='company logo' className='logo'/></Link>
          <div className="mobile__menu__container">
            <div className="menu-icon">
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
              <p onClick={menuHandler}>XXXXX</p>
            </div>
          </div>
        </nav>

        <Menu/>

      </header>


    
      <Switch>
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
        <Route path='/cart' component={Clearance}/>
        <Route path='/shoe/:id'>
          <Shoe key={shoeList.id} shoeList={shoeList}/>
        </Route>
        <Route path='/all-shoes'>
          <AllShoes shoeList={shoeList}/>
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default App;

