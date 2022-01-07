import * as actionTypes from './types'

export const addToCart = (itemID:number) => {
   return{
       type: actionTypes.ADD_TO_CART,
       payload:{
           id: itemID
       }
   }
}

export const removeFromCart = (itemID:number) =>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id: itemID
        }
    };
};

export const adjustQty = (itemID:number,value:number) =>{
    return{
        type: actionTypes.AdjustQty,
        payload:{
            id: itemID,
            qty: value,
        }
    };
};

export const addToWishlist = (itemID:number) => {
    return{
        type: actionTypes.ADD_TO_WISHLIST,
        payload:{
            id: itemID
        }
    };
};

export const removeFromWishlist = (itemID:number) => {
    return{
        type: actionTypes.REMOVE_FROM_WISHLIST,
        payload:{
            id: itemID
        }
    }
 }
