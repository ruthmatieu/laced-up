import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <section>
      insert image slider

      <section>
        <p>new year.<br/>new energy.</p>
        <Link to='/new-releases'><button>Shop</button></Link>
      </section>

      <section>
        <p>Trending Now</p>

        <div>
          <div className='trending__card'>
            <p>title: $100 or under</p>
            <img src='' alt=''/>
            <Link to='/clearance'><button>Shop</button></Link>
          </div>

          <div className='trending__card'>
            <p>title: $100 or under</p>
            <img src='' alt=''/>
            <Link to='/clearance'><button>Shop</button></Link>
          </div>
        </div>
      </section>

      <section>
        <p>The Latest</p>

        <div>
          insert cards with slider...
          will need to be mapped over, maybe from API or own data
        </div>
        <Link to='/new-releases'><button>See all</button></Link>
      </section>
    <Footer/>
  </section>
  );
}

export default Homepage;