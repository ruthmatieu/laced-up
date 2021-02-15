import React from 'react';
import { useParams, useRouteMatch, Route, NavLink } from "react-router-dom";
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoints';

import ShoeSize from './ShoeSize';

const Shoe = ({shoeList}) => {
    
    const params = useParams();

    const shoe = shoeList.find(item => `${item.id}` === params.id);
  console.log("heroes", shoe)
    
    return (
        <div style={{textAlign: 'left'}}>
            <div style={{backgroundColor: '#F7F7F7', padding: '10px 0', textAlign: 'center'}}>
                <p style={{margin: '0', textTransform: 'uppercase'}}>Free shipping & 60-Day Free return</p>
                <Link to='/membership'>Join Now</Link>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '25px 15px'}}>               
                <div className='mobile-desc'>
                    <p style={{margin: '0', fontWeight: '600'}}>{shoe.subTitle}</p>
                    <p style={{margin: '0', fontSize: '25px', fontWeight: '700'}}>{shoe.name}</p>
                    
                </div>
                <p style={{margin: '0', fontWeight: '600'}}>${shoe.price}</p>
            </div>

            <Container>
                <div className='shoe-div'>
                    <img src={shoe.image} alt={shoe.name}/>
                </div>
                
            
                <div>
                    <div className='desktop-desc'>
                        <p style={{margin: '0', fontWeight: '600'}}>{shoe.subTitle}</p>
                        <p style={{margin: '0', fontSize: '25px', fontWeight: '700'}}>{shoe.name}</p>
                    </div>
                    <ShoeSize/>
                    <div>
                        <p>
                        Let your attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning. Featuring the OG's wavy design lines, plastic accents and airy fabric on the upper, it celebrates defiant style.


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
                </div>
            </Container>

           
        </div>
    )
}

export default Shoe;

const Container = styled.div`
  .mobile-hero {
    display: block;
  }

  h1 {
    letter-spacing: -2px;
  }

  img {
    width: 100%;
  }

  .desktop-hero, .desktop-desc {
    display: none;
  }


    @media only screen and ${breakpoint.device.tablet} {

    }

    @media only screen and ${breakpoint.device.desktop} {
        //background-color: red;
        display: flex;
        margin: 0 50px;

        img {
            width: 300px;
        }

        .mobile-desc {
            display: none;
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