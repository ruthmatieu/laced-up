import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from '../breakpoint';

import empty from '../images/empty-cart.png'

const EmptyCart = () => {
    return (
        <Wrapper>
            <p className='notif'>There are no items in your cart.</p>
            <Link to='/shop'><p className='shop'>Start shopping</p></Link>.
            <img src={empty} alt='empty cart'/>
        </Wrapper>
    )
};

export default EmptyCart;

const Wrapper = styled.div `
    img {
        width: 250px;
    }

    .notif {
        font-size: 20px;
    }
    .shop {
        color: red;

    }
`