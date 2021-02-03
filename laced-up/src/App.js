import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components'

//components
import Homepage from './components/Homepage';
import NewReleases from './components/NewReleases';
import MensShoes from './components/MensShoes';
import WomensShoes from './components/WomensShoes';
import AllShoes from './components/AllShoes';
import Clearance from './components/Clearance';
import Register from './components/Register';
import Login from './components/Login';
import ConfirmedMembership from './components/ConfirmedMembership';

//App ID: 1dee9433-9189-41f8-b536-19c5dc6ce3d1
//API Key: f770a0f0-ce28-4b77-aa32-e63806448ee4

const App = () => {

  const key = 'f770a0f0-ce28-4b77-aa32-e63806448ee4';

  // axios
  //   .get(`https://cors-anywhere.herokuapp.com/http://nikeplus.nike.com/nikeplus/v1/services`)
  //   .then(res => {
  //     console.log(res);
  //   })
  //   .catch(err => {
  //     console.log('Mercedes error', err)
  //   })

    //HU:PguX75fJWc_t

  const Wrapper = styled.div`
    .desktop__nav {
      display: flex;
      justify-content: space-between;
    }

    .menu__items {
      display: flex;
      
    }

    .menu__items p{
      margin: 0;
      
    }

    .menu__btns {
    }
  `;

  return (
    <Wrapper className="App">
      <header>
      <nav className='desktop__nav'>
            <Link to='/'><img src='' alt='company logo'/></Link>

            <div className='menu__items'>
              <div className='menu__items'>
                <Link to='/'><p>Home</p></Link>
                <Link to='/new-releases'><p>New releases</p></Link>
                <Link to='/mens-shoes'><p>Men's shoes</p></Link>
                <Link to='/womens-shoes'><p>Women's shoes</p></Link>
                <Link to='/all-shoes'><p>All shoes</p></Link>
              </div>
              <div className='menu__btns'>
                  <Link to='/membership'><button>Join us</button></Link>
                  <Link to='/sign-in'><button>Sign in</button></Link>
              </div>
            </div>
        </nav>
      </header>

      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/new-releases' component={NewReleases}/>
        <Route path='/mens-shoes' component={MensShoes}/>
        <Route path='/womens-shoes' component={WomensShoes}/>
        <Route path='/all-shoes' component={AllShoes}/>
        <Route exact path='/membership' component={Register}/>
        <Route path='/sign-in' component={Login}/>
        <Route path='/membership/success' component={ConfirmedMembership}/>
        <Route path='/clearance' component={Clearance}/>
      </Switch>
    </Wrapper>
  );
}

export default App;
