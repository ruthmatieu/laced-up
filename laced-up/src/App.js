import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';

//components
import Homepage from './components/Homepage';
import NewReleases from './components/NewReleases';
import MensShoes from './components/MensShoes';
import WomensShoes from './components/WomensShoes';
import AllShoes from './components/AllShoes';
import Register from './components/Register';
import Login from './components/Login';


const App = () => {
  return (
    <div className="App">
      <header>
      <nav className='mobile__nav'>
            <Link to='/'><img src='' alt='company logo'/></Link>
            <div>
            <Link to='/'><p>Home</p></Link>
            <Link to='/new-releases'><p>New releases</p></Link>
            <Link to='/mens-shoes'><p>Men's shoes</p></Link>
            <Link to='/womens-shoes'><p>Women's shoes</p></Link>
            <Link to='/all-shoes'><p>All shoes</p></Link>

            <div>
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
        <Route path='/membership' component={Register}/>
        <Route path='/sign-in' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
