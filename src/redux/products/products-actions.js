import { UPDATE_ITEM_QTY, ADD_TO_CART, REMOVE_FROM_CART } from "./products-actionTypes";

export const addToCart = (itemId) => {
    return{
        type: ADD_TO_CART
    }
}

export const removeFromCart = () => {
    return{
        type: REMOVE_FROM_CART
    }
}

export const updateItemQty = () => {
    return{
        type: UPDATE_ITEM_QTY
    }
}

