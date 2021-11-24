import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from '../../breakpoints';

import empty from '../../images/empty-cart.png'

const EmptyCart = () => {
    return (
        <Wrapper className="">
            <div>
                <p className='notif text-center'>There are no items in your cart.</p>
                <MenuLink to='/new-releases'><p className='shop'>Start shopping</p></MenuLink>
                <img src={empty} alt='empty cart icon'/>
            </div>
        </Wrapper>
    )
};

export default EmptyCart;

const Wrapper = styled.div `
    max-width: 1800px;
    margin: 0 auto;
    height: 80vh;
    display: grid;
    place-items: center;
    img {
        width: 200px;
        display: block;
        margin-right: auto;
        margin-left: auto;
    }
    .notif {
        font-size: 1rem;
    }
    .shop {
        border: 2px solid black;
        border-radius: 5px;
        padding: 10px;
        transition: 0.3s;
    }
    .shop:hover {
        background-color: #111;
        color: white;
        transition: 0.3s;
    }
`

const MenuLink = styled(Link)`
    text-decoration: none;
    color: #131921;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.8rem;
    
    @media only screen and ${breakpoint.device.xl} {
      
    }
`