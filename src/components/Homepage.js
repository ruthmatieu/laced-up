import React from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import {latestAndGreatest} from '../data';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import heroLeft from '../images/desktop-bg-hero-two.png';
import heroRight from '../images/desktop-bg-hero.png';


//components
import NewItem from './NewItem';

//images
import one from '../images/products/new-release-collection-2.png';
import two from '../images/products/new-release-collection-1.png';
import three from '../images/products/im.png';
import four from '../images/products/fourteen-new.png';
import hero from '../images/hero.png';
import logo from '../images/logo.png';
//
const Homepage = ({shoeList}) => {

  document.title = 'LacedUp | Stylish Sneakers For Less';
  
  const params = useParams();

    const shoe = shoeList.find(item => `${item.id}` === params.id);
  console.log("heroes", shoe)

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
      description: `Shrug off grey winter days. Shop spring styles.`,
      cta: 'Shop',
      link: '/clearance',
      id: 2
    },
  ]

  
  return (
    <HomeSection>
      <div className='width-container'>
        <div style={{backgroundColor: '#F7F7F7', padding: '10px 0'}}>
            <p style={{margin: '0', textTransform: 'uppercase'}}>Free shipping & 60-Day Free return</p>
            <Link to='/membership' style={{color: 'black', fontSize: '13px'}}>Join Now</Link>
        </div>
        <div clasName='border-margin' style={{margin: '0 20px'}}>
          <div className='mobile-hero'>
            <img src= { hero } alt='hero image' style={{width: '100%'}}/>
          </div>

          <section className='desktop-hero'>
            <div className='hero-left'>
              <h1 className='heading-small' style={{ textAlign: 'left', fontFamily: `'Oswald', sans-serif`, textTransform: 'uppercase', margin: '0'}}>new year,<br/>new energy.</h1>
              <h1 className='heading-big' style={{ textAlign: 'left', fontFamily: `'Oswald', sans-serif`, textTransform: 'uppercase', margin: '0'}}>new <br/>year,<br/>new <br/>energy.</h1>
              <p>Take on anything the new year throws your way in<br/>these functional styles.</p>
              <Link to='/new-releases'><button className='hero-btn'>Shop</button></Link>
            </div>
            <div className='hero-right'>
              {/* containes the image of the man */}
            </div>
          </section>

          <section>
            <div style={{padding:'10px 0 15px 0', textAlign: 'left'}}>
              <h1 className='mobile-hero' style={{fontFamily: `'Oswald', sans-serif`, fontSize: '45px', textTransform: 'uppercase', margin: '0', lineHeight: '45px'}}>new year,<br/>new energy.</h1>
              <p className='mobile-hero'>Take on anything the new year throws your way in<br/>these functional styles.</p>
              <div style={{display: 'flex', justifyContent: 'center', width: '100%', paddingBottom: '30px'}}>
                <img src={one} alt='' style={{width: '50%', height: '100%', marginRight:'2px'}}/>
                <img src={two} alt='' style={{width: '50%', height: '100%', marginLeft:'2px'}}/>
              </div>
              <Link to='/new-releases'><button>Shop</button></Link>
            </div>
            
            <h2 style={{textAlign: 'left', marginTop: '70px'}}>Trending Now</h2>
             
              


              {/* <section>
                    {props.shoeList.map(item => {
                        return(
                        <div className='shoe-info-wrapper' key={item.id}>
                            <div className='shoe-info-sub-wrapper'>
                                <Link to={`/shoe/${item.id}`}><img src={item.image} alt={item.name}/></Link>
                                <div className='descriptions'>
                                    <p className='bold-desc'>{item.name}</p>
                                    <p className='thin-desc'>{item.subTitle}</p>
                                    <p className='thin-desc'>{item.availability}</p>
                                    <p className='bold-desc'>${item.price}</p>
                                </div>
                            </div>
                        </div>)
                    })}
             
              </section> */}

          </section>

          <section style={{}}>
                  {shoes.map(item => {
                    return (
                      <div>
                        <NewItem 
                        
                          key={item.id}
                          image={item.image}
                          description={item.description}
                          cta={item.cta}
                          link={item.link}
                          name={item.name}
                        />
                      </div>
                    )
                  })}
              
          </section>


          <section>
            <h2 style={{textAlign: 'left', marginTop: '70px'}}>The Latest And Greatest</h2>

            <div style={{display: 'flex', overflowY: 'hidden', overflowX: 'auto', whiteSpace: 'nowrap'}}>
              {latestAndGreatest.map(item => {
                return (
                  <div key={item.id}>
                    <div>
                    <Link to={`/shoe/${item.id}`}><img src={item.image} alt={item.name} style={{width: '300px', marginRight: '7px'}}/></Link>
                      <div style={{textAlign: 'left'}}>
                        <p style={{margin: '0', paddingTop: '5px', fontWeight: '700'}}>{item.name}</p>
                        <p style={{margin: '0', color: '#767676'}}>{item.subTitle}</p>
                        <p style={{margin: '0', color: '#767676'}}>{item.availability}</p>
                        <p style={{margin: '0', paddingTop: '5px', fontWeight: '700'}}>${item.price}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div style={{textAlign: 'left', marginTop: '30px'}}>
              <Link to='/new-releases'><button>Shop All</button></Link>
            </div> 

            <div style={{margin: '130px 0 130px 20px', textAlign: 'center'}}>
              <img src={logo} alt='company logo' style={{width: '80px'}}/>
              <p style={{fontSize: '55px', fontFamily: `'IBM Plex Serif', serif`, lineHeight: '50px'}}>Where <br/>All Athletes <br/>Belong.</p>

              <div>
                <Link to='/membership'><button style={{marginRight: '10px'}}>Join Us</button></Link>
                <Link to='/sign-in'><button>Logn In</button></Link>
              </div>

            </div>
          </section>
        </div>
      </div>
    <Footer/>
  </HomeSection>
  );
}

export default Homepage;



const HomeSection = styled.section`

  .width-container {
    max-width: 1920px;
    margin: 0 auto;
  }

  .mobile-hero {
    display: block;
  }

  h1 {
    letter-spacing: -2px;
  }

  .desktop-hero {
    display: none;
  }

  // .second-text-div {
  //     font-family: Oswald, sans-serif;
  //     text=transform: uppercase;
  //     margin: 0;
  //   }

  @media only screen and ${breakpoint.device.tablet} {
    //background-color: yellow;

    .mobile-hero {
      display: none;
      
    }

    .desktop-hero {
      display: block;
      display: flex;
      justify-content: space-between;
      margin-bottom: 130px;
    }

    .hero-left {
      background-image: url(${heroRight});
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      width: 50%;
      height: 100%;
      position: relative;
    }

    .heading-big {
      display: none;
    }

    .hero-left h1 {
      position: absolute;
      top: 50px;
      left: 25px;
      font-size: 45px;
      line-height: 45px;
    }

    .hero-left p {
      position: absolute;
      text-align: left;
      top: 140px;
      left: 25px;
    }

    .hero-btn {
      position: absolute;
      text-align: left;
      top: 230px;
      left: 25px;
    }

    .hero-right {
      background-image: url(${heroLeft});
      background-position: 50% 50%;
      background-size: cover;
      background-repeat: no-repeat;
      width: 50%;
      height: 100%;
      position: relative;
    }

    .hero-right {
      height: 800px;
      margin: 0;
    }

    .hero-left {
      height: 800px;
      margin: 0;
    }

    .trending {
      display: flex;
    }

    
  }

  @media only screen and ${breakpoint.device.desktop} {
    //background-color: red;

    .mobile-hero {
      display: none;
    }

    .heading-small {
      display: none
    }

    .heading-big {
      display: block;
      letter-spacing: -5px;
    }

    .hero-left h1 {
      position: absolute;
      top: 50px;
      left: 25px;
      font-size: 75px;
      line-height: 65px;
      
    }
    .hero-left p {
      position: absolute;
      top: 310px;
      left: 25px;
      
    }

    .hero-btn {
      position: absolute;
      text-align: left;
      top: 400px;
      left: 25px;
    }

    
  }
`;
