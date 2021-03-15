import React from 'react';
import {useParams} from 'react-router-dom';
import EmptyCart from './EmptyCart';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from '../breakpoint';
import Footer from '../components/Footer'

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

            <Wrapper>
                <div className='product-list'>

                
                {cartItems.map((item, index) => (
                    <div key={index} style={{}}>
                        {item.product.length === 1 ? 
                        <div style={{display: 'flex'}}>
                            <img src={item.product.image} alt={item.product.name} style={{width: '150px'}}/>
                            <div>
                                <h3>{item.product.name}</h3>
                                <p>${item.product.price}</p>
                                <h5>Qty: {item.qty}</h5> 
                            </div>
                        </div> 
                        : 
                        <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px 40px', borderTop: '1px solid #404040'}}>
                            
                            <img src={item.product.image} alt={item.product.name} style={{width: '150px'}}/>
                            <div>
                                <h3>{item.product.name}</h3>
                                <h5>Qty: {item.qty}</h5> 
                            </div>
                            <p>${item.product.price}</p>
                        </div>
                        
                        }

                    </div>
                ))}
                </div>
                <div className='product-checkout'>
                    <h4>Summary</h4>
                    <p>Subtotal: ${totalPrice}</p>
                    {/* <p>Tax: ${totalPrice*0.07}</p> */}
                    <p style={{backgroundColor: '#131921', color: 'white', padding: '10px 0'}}>Total: ${totalPrice}</p>
                    <div>
                        <button>Checkout</button>
                    </div>
                </div>
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Cart;


const Wrapper = styled.div`


@media only screen and ${breakpoint.device.desktop} {

   
    display: flex;
    
    
    .product-list {
        width: 60%;
    }
    
    .product-checkout {
        width: 40%;
    }
}
`