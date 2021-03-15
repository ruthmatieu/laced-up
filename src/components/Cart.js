import React from 'react';
import {useParams} from 'react-router-dom';
import EmptyCart from './EmptyCart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from '../breakpoint';

const Cart = ({length, cartItems, totalPrice}) => {
    console.log('cart items', cartItems)
    const params = useParams();
    console.log('params', params)

    //totals up item costs
    const totalQty = cartItems.reduce((prev, curr) => {
        return prev + curr.qty
    }, 0);
    console.log('total qty:',totalQty)


    const removeItem = () => {

    }

    const editItem = () => {

    }

    return (
        <div>
            <p>
                {cartItems.length === 1 ? `There is ${cartItems.length} item in your cart.` : 
                (cartItems.length > 1 ? `There are ${cartItems.length} items in your cart.`: 
                <EmptyCart/>)}
            </p>

            <Wrapper className='cart-wrapper'>
                <div>

                
                {cartItems.map((item, index) => (
                    <div key={index} style={{}}>
                        {item.product.length === 1 ? 
                        <div>
                            <img src={item.product.image} alt={item.product.name} style={{width: '150px'}}/>
                            <h3>{item.product.name}</h3>
                            <p>${item.product.price}</p>
                            <h5>Qty: {item.qty}</h5> 
                            {/* only one */}
                        </div> 
                        : 
                        <div>
                            <img src={item.product.image} alt={item.product.name} style={{width: '150px'}}/>
                            <h3>{item.product.name}</h3>
                            <p>${item.product.price}</p>
                            <h5>Qty: {item.qty}</h5> 
                            {/* more than one */}
                        </div>
                        
                        }

                    </div>
                ))}
                </div>
                <div>
                <p style={{backgroundColor: '#131921', color: 'white', padding: '10px 0'}}>Total: ${totalPrice}</p>

                </div>
            </Wrapper>

        </div>
    )
}

export default Cart;

const Wrapper = styled.div `
    .cart-wrapper {
        display: flex;
    }
`