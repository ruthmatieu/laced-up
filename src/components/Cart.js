import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h3>Cart</h3>
            <div>
                {props.cartItems.length === 0 && <div>There are no items in your bag.</div>}
            </div>
        </div>
    )
}

export default Cart;