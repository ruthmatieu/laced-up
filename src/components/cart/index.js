import React, { useState } from "react";
import {useParams} from 'react-router-dom';
import EmptyCart from './EmptyCart';
import styled from 'styled-components';
import breakpoint from '../../breakpoints';
import Nav from "../nav";
import Footer from '../footer';


const Cart = ({data, cartItems, totalPrice}) => {

    //console.log('cart items', cartItems)
    //const params = useParams();
    //console.log('params', params)

    const [list, setList] = useState(cartItems)

    
    //totals up item costs
    // const totalQty = cartItems.reduce((prev, curr) => {
    //     return prev + curr.qty
    // }, 0);

    //console.log('total qty:',totalQty)
    
   document.title = `LacedUp | My Cart (${cartItems.length})`;

    const tax = totalPrice * 0.07;

    //format into US currency
    function formatMoney(number) {
        return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }


    const removeItem = (id) => {
        console.log('original list: ', list)
        const newList = list.filter((item, index) => item.product.id !== id)
        //console.log(`item removed`)
        setList(newList)
        
        console.log('new list: ', list)
        
    };

    const editItem = () => {
        //
    }

    return (
        <div>
            <div className="px-5" style={{maxWidth: '1800px', margin: '0 auto'}}>
                <Nav/>

                { cartItems.length >= 1 ? 
                <div>
                    <p>
                    {cartItems.length === 1 ? `You have ${cartItems.length} item in your cart` : 
                    cartItems.length > 1 ? `You have ${cartItems.length} items in your cart` : '' }
                </p>

                <Wrapper>
                    <div className='product-list'>
            
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            {item.length === 1 ? 
                            <div>
                            <div style={{display: 'flex'}}>
                                <img src={item.image} alt={item.product.name} style={{width: '150px'}}/>
                                <div>
                                    <h3>{item.product.name}</h3>
                                    <p>${item.product.price}</p>
                                    <h5>Qty: {item.qty}</h5> 
                                </div>
                            </div> 
                        </div>
                            : 
                            <div style={{display: 'flex', justifyContent: 'space-between', margin: '15px 40px', borderTop: '1px solid #404040'}}>
                                
                                <img src={item.product.image} alt={item.product.name} style={{width: '150px'}}/>
                                <div>
                                    <h3>{item.product.name}</h3>
                                    <h5>Qty: {item.qty}</h5> 
                                    <button className="remove-btn" type="button" onClick={() => removeItem(item.product.id)}>Remove</button>
                                </div>
                                <p>${item.product.price}</p>
                                
                            </div>
                            
                            }
                            

                        </div>
                    ))} 
                    
                    
                    </div>
                    <div className='product-checkout'>
                            <h4>Summary</h4>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p>Subtotal</p>
                                <p>{formatMoney(totalPrice)}</p>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p>Estimated Shipping & Handling</p>
                                <p>$0.00</p>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <p>Estimated Tax</p>
                                <p>{formatMoney(tax)}</p>
                            </div>
                            
                            <p style={{backgroundColor: '#131921', color: 'white', padding: '10px 0'}}>Total: {formatMoney(totalPrice + tax)}</p>
                            <div>
                                <button>Checkout</button>
                            </div>
                        </div>
                </Wrapper> 
                </div>
                    :
                    <EmptyCart/>
                }
                
            </div>
            <Footer/>
        </div>
    )
}

export default Cart;


const Wrapper = styled.div`


padding-bottom: 130px;
.product-checkout {
    margin: 0 20px;
}

.remove-btn {
    border: none;
    background-color: #111;
    font-size: 12px;
    color: #FFF;
    height: 2rem;
    border-radius: 25px;
    width: 6rem;
}

.remove-btn:hover {
    background-color: #404040;
}
@media only screen and ${breakpoint.device.xl} {
   
    display: flex;
    
    
    .product-list {
        width: 60%;
    }
    
    .product-checkout {
        width: 40%;
        margin-right: 40px;
    }
}
`