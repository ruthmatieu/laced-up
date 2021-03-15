import React from 'react';
import { useParams } from "react-router-dom";
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoint';
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
                    <Link to='/membership'>Join Now</Link>
                </div>
                <div className='mobile-section' style={{display: 'flex', justifyContent: 'space-between', margin: '25px 15px'}}>               
                    <div className='mobile-desc'>
                        mobile desc
                        <p style={{margin: '0', fontWeight: '600'}}>{shoe.subTitle}</p>
                        <p style={{margin: '0', fontSize: '25px', fontWeight: '700'}}>{shoe.name}</p>
                        
                    </div>
                    <p style={{margin: '0', fontWeight: '600'}}>${shoe.price}</p>
                </div>
            </div>
        </MobileContainer>

            <Container>
                <div className='shoe-div'>
                    <img src={shoe.image} alt={shoe.name}/>
                </div>
                
            
                <div>
                    <div className='desktop-desc'>
                        <p style={{margin: '0', fontWeight: '600'}}>{shoe.subTitle}</p>
                        <p style={{margin: '0', fontSize: '25px', fontWeight: '700'}}>{shoe.name}</p>
                        
                        <div>
                            <p>
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
                        <button onClick={() => addToCart(shoe, 1)}>Add to Cart</button>
                    </div>
                    
                </div>
            </Container>
            <Footer/>
            
        </div>
    )
}

export default Shoe;

const MobileContainer = styled.div`
    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
       
        .mobile-desc {
            display: none;
            background-color: red;
        }
    }
`

const Container = styled.div`
  .mobile-hero {
    display: block;
  }

  h1 {
    letter-spacing: -2px;
  }

  p {
      text-align: left;
  }
  img {
    width: 100%;
  }

  ul li {
      text-align: left;
  }

  .desktop-hero, .desktop-desc {
    display: none;
  }
  button {
    background-color: #111;
    color: white;
    border: none;
    border-radius: 25px;
    padding: 10px 20px;
    text-align: left;
}

button:hover {
    cursor: pointer;
}


    @media only screen and ${breakpoint.device.tablet} {

    }

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
        display: flex;
        margin: 120px 50px;

        img {
            width: 300px;
        }

        .mobile-desc {
            display: none;
            background-color: red;
        }

        .shoe-div {
            width: 60%;
        }

        .desktop-desc {
            display: block;
            margin-left: 50px;
            // width: 40%;
        }
    }
  }
`;