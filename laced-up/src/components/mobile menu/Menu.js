import React from 'react';
import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
          <div className>
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
        </nav>
    )
}

export default Menu;