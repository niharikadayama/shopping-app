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
    }
}

export const incNumber = (itemID:number,value:number) =>{
    return{
        type:actionTypes.INCREMENT,
        payload:{
            id: itemID,
            value: value
        }
    }
}

export const decNumber = (itemID:number,value:number) =>{
    return{
        type:actionTypes.DECREMENT,
        payload:{
            id: itemID,
            value: value
        }
    }
}