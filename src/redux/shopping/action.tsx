import * as actionTypes from './types'

export const addToCart = (itemID) => {
   return{
       type: actionTypes.ADD_TO_CART,
       payload:{
           id: itemID
       }
   }
}

export const removeFromCart = (itemID) =>{
    return{
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
            id: itemID
        }
    }
}

export const incNumber = () =>{
    return{
        type:actionTypes.INCREMENT,
    }
}

export const decNumber = () =>{
    return{
        type:actionTypes.DECREMENT,
    }
}