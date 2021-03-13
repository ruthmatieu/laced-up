import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import Footer from './Footer';
import Cart from './Cart';

const ShoeSize = (props) => {

const sizes = [
    'M 6 / W 7.5',
    'M 6.5 / W 8',
    'M 6 / W 7.5',
    'M 6.5 / W 8',
    'M 6 / W 7.5',
    'M 6.5 / W 8',
    'M 6 / W 7.5',
    'M 6.5 / W 8',
    'M 6 / W 7.5',
    'M 6.5 / W 8',
    'M 6 / W 7.5',
    'M 6.5 / W 8'
]

    const addShoeToCart = (id) => {
        id = props.shoeId
    }
    
    return (
        <div>
            <div>
            <div style={{margin: '0 15px'}}>
                <p>Select size</p>
                {sizes.map(item => {
                    return <Btn>{item}</Btn>
                })}
            </div>

            <CartBtn onClick={() => <Cart shoeId={props.shoeId}/>}>Add to Bag</CartBtn>
            
            </div>           
        </div>
    )
}

export default ShoeSize;

const Btn = styled.button`
    border: 1px solid #E5E5E5;
    background-color: white;
    color: black;
    padding: 18px 50px;
    border-radius: 5px;

    @media only screen and ${breakpoint.device.desktop} {
        border: 1px solid #E5E5E5;
        background-color: white;
        color: black;
        padding: 18px 50px;
        border-radius: 5px;
    }
`

const CartBtn = styled.button`

    border: 1px solid #E5E5E5;
    background-color: black;
    color: white;
    border-radius: 0;
    padding: 25px 0;
    Width: 100%;

    @media only screen and ${breakpoint.device.desktop} {
        border: 1px solid black;
        background-color: black;
        color: white;
        padding: 18px 50px;
        border-radius: 5px;
        width: 50%;
    }
`