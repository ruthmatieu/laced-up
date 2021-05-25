import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import breakpoint from '../../breakpoint';

//comp
import Footer from './Footer';

//images
import logo from '../../images/logo.png'
import landingHero from '../../images/landing-hero.png';
import mobileHero from '../../images/mobile-landing.png';
import one from '../../images/landing-one.png';
import two from '../../images/landing-two.png';
import three from '../../images/landing-three.png';
import four from '../../images/landing-4.png';
import five from '../../images/landing-5.png';
import six from '../../images/landing-6.png';

const Home = (props) => {

    document.title = 'LacedUp | Stylish Sneakers For Less | Home';
  
    const params = useParams();
    
    const shoe = props.products.find(item => `${item.id}` === params.id);
    console.log("heroes", shoe)

    const latestAndGreatest = props.products.filter(item => (
        item.newRealse === true
    ))

    const firstSection = [
        {
        name: '',
        image: one,
        description: 'Shoes Always $100 & Under',
        cta: 'Shop',
        link: '/all-shoes',
        id: 1
        },
        {
        name: '',
        image: two,
        description: `Shrug off grey winter days. Shop spring styles.`,
        cta: 'Shop',
        link: '/all-shoes',
        id: 2
        },
    ]

    const secondSection = [
        {
            name: '',
            image: five,
            description: 'Air Max for Kids',
            cta: 'Shop',
            link: '/all-shoes',
            id: 1
        },
        {
            name: '',
            image: four,
            description: `Air Max for Men`,
            cta: 'Shop',
            link: '/all-shoes',
            id: 2
        },
        {
            name: '',
            image: six,
            description: `Air Max for Women`,
            cta: 'Shop',
            link: '/all-shoes',
            id: 2
        },
    ]
    return (
        <Wrapper>

            <div className='shipping-notification'>
                <p>Free shipping & 60-Day Free returns</p>
                <Link to='/membership' style={{color: 'black', fontSize: '13px'}}>Join Now</Link>
            </div>

            <div className='intro-paragraph'>
                <div className='intro-paragraph-div'>
                    {/* <img className='desktop-hero' src={landingHero} alt='man running track'/> */}
                    <img className='mobile-hero' src={mobileHero} alt='man running track'/>
                    <div className='hero-left'>
                        <h1>new year,<br/>new energy.</h1>
                        <p>Take on anything the new year throws your way in<br/>these functional styles.</p>
                        <Link to='/new-releases'><button className='hero-btn'>Shop</button></Link>
                        <button>Explore</button>
                    </div>
                    <div className='hero-left-mobile'>
                        <h1>new year,<br/>new energy.</h1>
                        <p>Take on anything the new year throws your way in<br/>these functional styles.</p>
                        <Link to='/new-releases'><button className='hero-btn'>Shop</button></Link>
                        <button>Explore</button>
                    </div>
                </div>
                <div className='trending'>

                    <h2>Trending Now</h2>
                    <div className='trending-section'>
                        
                        {firstSection.map(item => (
                            <div style={{position: 'relative'}}>
                                <img src={item.image} alt={item.name} style={{width: '100%'}}/>
                                <div style={{position: 'absolute', bottom: '35px', textAlign: 'left', paddingLeft: '40px'}}>
                                    <p style={{ color: 'white', fontWeight: '600'}}>{item.description}</p>
                                    <Link to='/all-shoes'><button>Shop</button></Link>
                                </div>
                        </div>
                        ))}
                        
                        
                    </div>
                </div>
            
            <div className='latest-section'>
                    <h2 style={{textAlign: 'left'}}>The Latest & Greatest</h2>
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
                    <Link to='/all-shoes'><button style={{textAlign: 'left'}}>Shop</button></Link>
            </div>
            
                <div className='member-access'>
                    <h2>Member First Access</h2>
                    <img src={three} alt='man running track' style={{width: '100%', height: '50%'}}/>
                    <Link to='/membership'><button>Sign Up</button></Link>
                </div>
                <div className='air-max'>

                    <h2>The Best of Air Max</h2>
                    <div className='air-max-section'>
                        
                        <div className='air-max-div'>
                            
                            {secondSection.map(item => (
                                <div style={{position: 'relative', paddingBottom: '8px'}}>
                                    <img src={item.image} alt={item.name} style={{width: '100%'}}/>
                                    <div style={{position: 'absolute', bottom: '35px', textAlign: 'left', paddingLeft: '40px'}}>
                                        <p style={{ color: 'white', fontWeight: '600'}}>{item.description}</p>
                                        <Link to='/all-shoes'><button>Shop</button></Link>
                                    </div>
                                </div>
                            ))}
                            
                            
                        </div>
                    </div>
                </div>
            </div>

            <div style={{margin: '130px 0 130px 20px', textAlign: 'center'}}>
              <img src={logo} alt='company logo' style={{width: '80px'}}/>
              <p style={{fontSize: '55px', fontFamily: `'IBM Plex Serif', serif`, lineHeight: '50px'}}>Where <br/>All Athletes <br/>Belong.</p>

              <div>
                <Link to='/membership'><button style={{marginRight: '10px'}}>Join Us</button></Link>
                <Link to='/sign-in'><button>Log In</button></Link>
              </div>

            </div>
        <Footer/>
        </Wrapper>
    )
}

const mappedStateToProps = (state) => {
    return {
      products: state.products.products
    }
  }
  export default connect(mappedStateToProps)(Home);
  

const Wrapper = styled.section`


    .shipping-notification {
        padding: 10px 0;
        background-color: #F7F7F7;
    }

    .shipping-notification p {
        margin: 0;
        text-transform: uppercase;
        font-size: 0.85rem;
    }

    .desktop-hero {
        display: none;
    }

    .intro-paragraph {
        margin: 0 20px;
        
    }

    .intro-paragraph-div {
        position: relative;
        max-width: 1920px;
        margin: 0 auto;
    }

    .intro-paragraph-div img {
        width: 100%;
        height: 50%;
    }
    .hero-left {
        display: none;
        
    }
    .hero-left-mobile {
        padding-bottom: 50px;
        text-align: left;
    }

    .hero-left-mobile h1 {
        letter-spacing: -2px;
        text-transform: uppercase;
        font-size: 3rem;
        margin: 0;
        font-family: 'Oswald', sans-serif;
    }

    .hero-left-mobile p {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    .hero-left-mobile button {
        font-size: 1rem;
        margin-right: 10px;
    }

    h2 {
        text-align: left
    }

    .trending, .air-max {
        max-width: 1920px;
        margin: 0 auto;
    }

    .trending-section {
        padding-bottom: 50px;
    }


    .latest-section, .member-access {
        padding-bottom: 80px;
        max-width: 1920px;
        margin: 0 auto;
    }

    .latest-section button {
        margin-top: 20px;
        text-align: left;
        font-size: 1rem;
    }
    .member-access {
        text-align: left;
    }

    .member-access button {
        margin-top: 20px;
        font-size: 1rem;
    }

    .air-max-div {
        
    }

    @media only screen and ${breakpoint.device.tablet} {
        //background-color: yellow;

        .mobile-hero {
            display: none;
        }
        .desktop-hero {
            display: block;
        }

        .intro-paragraph {
            margin: 0 40px;
        }

        .intro-paragraph-div {
            height: 550px;
            background-image: url(${landingHero});
            background-repeat: no-repeat;
            background-size: cover;
            margin-bottom: 70px;
        }

        .hero-left-mobile {
            display: none;
        }

        .hero-left {
            display: block;
            padding-top: 150px;
            text-align: left;
            top: 80px;
            padding-left: 50px;
        }

        .hero-left h1 {
            font-family: 'Oswald', sans-serif;
            text-transform: uppercase;
            font-size: 3.5rem;
            margin: 0;
            color: white;
        }
    
        .hero-left p {
            font-size: 1rem;
            line-height: 1.5rem;
            color: white;
        }
    
        .hero-left button {
            margin-right: 10px;
            color: #111;
            font-size: 1rem;
            background-color: white;
        }

        .hero-left button:hover {
            cursor: pointer;
        }

       
        .trending-section {
            display: flex;
            justify-content: space-between;
        }

        .air-max-section {
            display: flex;
            justify-content: space-around;

        }
        .air-max-div {
            display: flex;
        }
    }

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;

        .intro-paragraph {
            margin: 0 60px;
        }
    }
`