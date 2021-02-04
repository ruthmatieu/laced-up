import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import breakpoint from '../breakpoints';
import Footer from './Footer';

const ShoeSize = () => {

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
    
    return (
        <div>
            <div style={{margin: '0 15px'}}>
                <p>Select size</p>
                {sizes.map(item => {
                    return <Btn>{item}</Btn>
                })}
            </div>

            <Link to='/cart'><CartBtn>Add to Bag</CartBtn></Link>
            <Footer/>
           
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
        border: 1px solid #E5E5E5;
        background-color: white;
        color: black;
        padding: 18px 50px;
        border-radius: 5px;
    }
`