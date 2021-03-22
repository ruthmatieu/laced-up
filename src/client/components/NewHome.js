import React from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
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

const NewHome = ({data}) => {

    document.title = 'LacedUp | Stylish Sneakers For Less';
  
    const params = useParams();
    
    const shoe = data.find(item => `${item.id}` === params.id);
    console.log("heroes", shoe)

    const latestAndGreatest = data.filter(item => (
        item.newRealse === true
    ))

    const firstSection = [
        {
        name: '',
        image: one,
        description: 'Shoes Always $100 & Under',
        cta: 'Shop',
        link: '/shop',
        id: 1
        },
        {
        name: '',
        image: two,
        description: `Shrug off grey winter days. Shop spring styles.`,
        cta: 'Shop',
        link: '/shop',
        id: 2
        },
    ]

    const secondSection = [
        {
            name: '',
            image: five,
            description: 'Air Max for Kids',
            cta: 'Shop',
            link: '/shop',
            id: 1
        },
        {
            name: '',
            image: four,
            description: `Air Max for Men`,
            cta: 'Shop',
            link: '/shop',
            id: 2
        },
        {
            name: '',
            image: six,
            description: `Air Max for Women`,
            cta: 'Shop',
            link: '/shop',
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
                    <img className='desktop-hero' src={landingHero} alt='man running track'/>
                    <img className='mobile-hero' src={mobileHero} alt='man running track'/>
                    <div className='hero-left'>
                        <h1 className='heading-small'>new year,<br/>new energy.</h1>
                        <h1 className='heading-big'>new <br/>year,<br/>new <br/>energy.</h1>
                        <p>Take on anything the new year throws your way in<br/>these functional styles.</p>
                        <Link to='/shop'><button className='hero-btn'>Shop</button></Link>
                        <button>Explore</button>
                    </div>
                </div>
            <div>

            <h2>Trending Now</h2>
            <div className='trending-section'>
                
                {firstSection.map(item => (
                    <div style={{position: 'relative'}}>
                        <img src={item.image} alt={item.name} style={{width: '100%'}}/>
                        <div style={{position: 'absolute', bottom: '35px', textAlign: 'left', paddingLeft: '40px'}}>
                            <p style={{ color: 'white', fontWeight: '600'}}>{item.description}</p>
                            <Link to='/shop'><button>Shop</button></Link>
                        </div>
                        
                    {/* // <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    // <div style={{width: '50%'}}>
                    //     <img src={item.image} style={{width: '100%'}}/>
                    // </div>
                    // <div style={{width: '50%'}}>
                    // <img src={two} style={{width: '100%'}}/>
                    // </div> */}
                </div>
                ))}
                
                
            </div>
            </div>
            
            <div>
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
            </div>
            

            <div>
                <img src={three} alt='woman resting on rock' style={{width: '100%', height: '50%'}}/>
            </div>

                <div className='air-max-section'>
                    <div className='air-max-div'>
                        
                        {secondSection.map(item => (
                            <div style={{position: 'relative'}}>
                                <img src={item.image} alt={item.name} style={{width: '100%'}}/>
                                <div style={{position: 'absolute', bottom: '35px', textAlign: 'left', paddingLeft: '40px'}}>
                                    <p style={{ color: 'white', fontWeight: '600'}}>{item.description}</p>
                                    <Link to='/shop'><button>Shop</button></Link>
                                </div>
                                
                            {/* // <div style={{display: 'flex', justifyContent: 'space-around'}}>
                            // <div style={{width: '50%'}}>
                            //     <img src={item.image} style={{width: '100%'}}/>
                            // </div>
                            // <div style={{width: '50%'}}>
                            // <img src={two} style={{width: '100%'}}/>
                            // </div> */}
                        </div>
                        ))}
                        
                        
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

export default NewHome;

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
    }

    .intro-paragraph-div img {
        width: 100%;
        height: 50%;
    }

    .intro-paragraph-div .hero-left {
        position: absolute;
        top: 50px;
    }

    .intro-paragraph-div .hero-left h1 {
        font-family: 'Oswald', sans-serif;
        text-align: left;
        text-transform: uppercase;
        margin: 0;
        color: white;
    }

    .intro-paragraph-div .hero-left p {
        color: white
    }

    h2 {
        text-align: left
    }

    .air-max-div {
        
    }

    @media only screen and ${breakpoint.device.tablet} {
        background-color: yellow;

        .mobile-hero {
            display: none;
        }
        .desktop-hero {
            display: block;
        }

        .intro-paragraph {
            margin: 0 40px;
        }
        .trending-section {
            display: flex;
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
        background-color: red;

        .intro-paragraph {
            margin: 0 60px;
        }
    }
`