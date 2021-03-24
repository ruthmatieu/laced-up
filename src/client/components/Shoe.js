import React from 'react';
import { useParams } from "react-router-dom";
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../../breakpoint';
// import ShoeSize from './ShoeSize';
import Footer from './Footer';

const Shoe = ({data, addToCart}) => {
    console.log(data.id)
    const params = useParams();

    const shoe = data.find(item => `${item.id}` === params.id);

    document.title = `LacedUp | ${shoe.name}`;
    
  console.log("heroes", shoe)
    
    return (

    <div>
        <MobileContainer>
            <div style={{textAlign: 'left'}}>
                <div style={{backgroundColor: '#F7F7F7', padding: '10px 0', textAlign: 'center'}}>
                    <p style={{margin: '0', textTransform: 'uppercase'}}>Free shipping & 60-Day Free return</p>
                    <Link to='/membership' style={{color: 'black', fontSize: '13px'}}>Join Now</Link>
                </div>
                <div className='mobile-section' style={{display: 'flex', justifyContent: 'space-between', margin: '25px 15px'}}>               
                    <div className='mobile-desc'>
                        <p style={{margin: '0', fontWeight: '600'}}>{shoe.subTitle}</p>
                        <p style={{margin: '0', fontSize: '25px', fontWeight: '700'}}>{shoe.name}</p>
                        
                    </div>
                    <p className='price' style={{margin: '0', fontWeight: '600'}}>${shoe.price}</p>
                    
                </div>

            </div>

        </MobileContainer>

            <Container>
                <div className='shoe-div'>
                    <img src={shoe.image} alt={shoe.name}/>
                    <button className='mobile-btn' onClick={() => addToCart(shoe, 1)}>Add to Cart</button>
                    <Link to='/all-shoes'><button className='continue-btn-mobile'>Continue Shopping</button></Link>

                </div>
                
            
                <div>
                    <div className='desktop-desc'>
                        <p style={{margin: '0', fontWeight: '600'}}>{shoe.subTitle}</p>
                        <p style={{margin: '0', fontSize: '25px', fontWeight: '700'}}>{shoe.name}</p>
                        
                        <div>
                            <p className='shoe-desc'>
                            Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air 
                            experience that offers premium stability and unbelievable cushioning. 
                            Featuring the OG's wavy design lines, plastic accents and airy fabric 
                            on the upper, it celebrates defiant style.
                            </p>
                            <ul>
                                <li>
                                    Shown: University Red/Chile Red/Metallic Silver/Black
                                </li>
                                <li>
                                    Style: DD9609-600
                                </li>
                            </ul>
                        </div>

                        <button onClick={() => addToCart(shoe, 1)} className='cart-btn'>Add to Cart</button>
                        <Link to='/all-shoes'><button className='continue-btn'>Continue Shopping</button></Link>
                    </div>
                    
                </div>
            </Container>
            <Footer/>
            
        </div>
    )
}

export default Shoe;

const MobileContainer = styled.div`

    max-width: 1920px;
    margin: 0 auto;

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
       
        .mobile-desc {
            display: none;
            background-color: red;
        }
    }
`

const Container = styled.div`

    max-width: 1920px;
    margin: 0 auto;

  .mobile-hero {
    display: block;
  }

  h1 {
    letter-spacing: -2px;
  }

  .shoe-desc {
      text-align: left;
      font-size: 1rem;
      line-height: 1.5rem;
      padding-bottom: 50px;
      margin-right: 50px;
  }

  img {
    width: 100%;
  }

  ul li {
      text-align: left;
      color: gray;
      padding-bottom: 5px;
  }

  .mobile-btn {
    border-radius: 0;
    width: 70%;
    padding: 20px 0;
    text-align: center;
    margin-top: 20px;
  }

  .continue-btn-mobile {
    border-radius: 0;
    border: 1px solid gray;
    width: 70%;
    padding: 20px 0;
    text-align: center;
    background-color: white;
    color: #111;
    margin: 10px 0 150px 0;
  }

  .desktop-hero, .desktop-desc {
    display: none;
  }
  .cart-btn {
    background-color: #111;
    border: none;
    border-radius: 30px;
    padding: 20px 120px;
    margin: 0 5px;
    transition: 0.5s;
    color: white;
    font-size: 16px;
    font-weight: 500;
}

.cart-btn:hover {
    cursor: pointer;
    background-color: #404040;
    transition: 0.5s;
}
.continue-btn {
    background-color: white;
    font-size: 16px;
    font-weight: 500;
    color: #111;
    border: 1px solid #111;
    border-radius: 30px;
    padding: 20px 100px;
    margin: 50px 5px 0 5px;
}

.continue-btn:hover {
    cursor: pointer;
}

    @media only screen and ${breakpoint.device.tablet} {

    }

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
        display: flex;
        //margin: 120px 50px;

        img {
            width: 600px;
        }

        .mobile-desc {
            display: none;
            background-color: red;
        }
        .mobile-btn {
            display: none;
        }

        .continue-btn-mobile {
            display: none;
        }

        .shoe-div {
            width: 60%;
            padding-bottom: 50px;
        }

        .desktop-desc {
            display: block;
            margin-left: 50px;
            // width: 40%;
        }

        .price {
            display: none;
            
        }
    }
  }
`;