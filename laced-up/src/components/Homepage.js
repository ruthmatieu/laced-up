import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';

//components
import NewItem from './NewItem';

//images
import one from '../images/products/new-release-collection-1.png';
import two from '../images/products/new-release-collection-2.png';
import three from '../images/products/im.png';
import four from '../images/products/fourteen.png';
import hero from '../images/videos/hero.mp4';

const Homepage = () => {

  const shoes = [
    {
      name: '',
      image: three,
      description: 'Shoes Always $100 & Under',
      cta: 'Shop',
      link: '/clearance',
      id: 1
    },
    {
      name: '',
      image: four,
      description: `Love them? Move them. Valentine's Day Pick`,
      cta: 'Shop',
      link: '/clearance',
      id: 2
    },
  ]

  

  
  return (
    <section>
      <div style={{backgroundColor: '#F7F7F7', padding: '10px 0'}}>
          <p style={{margin: '0', textTransform: 'uppercase'}}>Free shipping & 60-Day Free return</p>
          <Link to='/membership'>Join Now</Link>
      </div>
      <div style={{margin: '0 15px'}}>
        <video loop autoPlay muted style={{width: '100%'}}>
          <source src= { hero } type="video/mp4" />
        </video>

        <section>
          <div style={{padding:'10px 0 15px 0', textAlign: 'left'}}>
            <h1 style={{fontFamily: `'Oswald', sans-serif`, fontSize: '45px', textTransform: 'uppercase', margin: '0', lineHeight: '45px'}}>new year,<br/>new energy.</h1>
            <p>Take on anything the new year throws your way in<br/>these functional styles.</p>
            <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <img src={one} alt='' style={{width: '50%', marginRight:'2px'}}/>
              <img src={two} alt='' style={{width: '50%', marginLeft:'2px'}}/>
            </div>
            <Link to='/new-releases'><button>Shop</button></Link>
          </div>
          

        <h2 style={{textAlign: 'left'}}>Trending Now</h2>
          {shoes.map(item => {
            return <NewItem 
              key={item.id}
              image={item.image}
              description={item.description}
              cta={item.cta}
              link={item.link}
              name={item.name}
            />
          })}
        </section>

        <section>
          <h2>The Latest And Greatest</h2>

          <div>
            insert cards with slider...
            will need to be mapped over, maybe from API or own data
          </div>
          <Link to='/new-releases'><button>See all</button></Link>
          
        </section>
      </div>
    <Footer/>
  </section>
  );
}

export default Homepage;


