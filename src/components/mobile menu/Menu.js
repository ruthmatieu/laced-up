import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
          <div className='mobile__nav'>
            <Link to='/new-releases'>New Releases</Link>
            <Link to='/mens-shoes'>Men</Link>
            <Link to='/womens-shoes'>Women</Link>
            <Link to='/all-shoes'>All Shoes</Link>
          </div>
          <div className=''>
            <Link to='/cart'>Bag</Link>
            <Link to='/womens-shoes'>Favorites</Link>
            <Link to='/all-shoes'>Help</Link>
          </div>

          {/* <nav className='mobile__nav'>
          <Link to='/'><img src={logo} alt='company logo' className='logo'/></Link>
          <GiHamburgerMenu className='open-menu'/>
          <div className="mobile__menu__container">
            <div className="menu-icon">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/'>New Releases</Link></li>
              <li><Link to='/'>Men</Link></li>
              <li><Link to='/'>Women</Link></li>
              <li><Link to='/'>All Shoes</Link></li>
            </div>
          </div>
          <GrClose className='closed-menu'/>
        </nav> */}
        </nav>
    )
}

export default Menu;