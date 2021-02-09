import React from 'react';

const Cart = (props) => {
    return (
        <div>
            Cart
            <div>
                {props.cartItems.length === 0 && <div>There are no items in yor bag.</div>}
            </div>
        </div>
    )
}

export default Cart;