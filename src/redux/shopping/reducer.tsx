import React,{useEffect} from 'react';
import * as actionTypes from './types';
import { materials } from 'constant';
import { Images } from 'theme';

const INITIAL_STATE = {
    materials,
    cart: [],
    wishlist:[],
    currentItem: null,
   
}

const shopReducer = (state = INITIAL_STATE,action) =>{
    
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            //get the item data from materials array
            const item = state.materials.find(prod => prod.id === action.payload.id) 
            // check if item is in cart already
            const inCart = state.cart.find((item:any)=> 
            item.id === action.payload.id ? true : false
            );
            
            return {
               ...state,
               cart: inCart
                ? state.cart.map((item:any) => 
                   item.id === action.payload.id 
                    ? {...item, qty: item.qty + 1} 
                    : item
                )
                : [...state.cart,{...item, qty: 1}]
            };
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item:any) => item.id !== action.payload.id)
            };
        case actionTypes.AdjustQty:
            return{
                ...state,
                cart: state.cart.map((item:any) => item.id === action.payload.id ? {...item, qty: action.payload.qty}: item)
            };
        case actionTypes.ADD_TO_WISHLIST:
            //get the item data from materials array
            const items = state.materials.find(prod => prod.id === action.payload.id) 
            // check if item is in wishlist already
            const inWishlist = state.wishlist.find((item:any)=> 
            item.id === action.payload.id ? true : false
            );
            
            return {
               ...state,
               wishlist: inWishlist
                ? state.wishlist.map((item:any) => 
                   item.id === action.payload.id 
                    ? {...item} 
                    : item
                )
                : [...state.wishlist]
            };
        case actionTypes.REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.filter((item:any) => item.id !== action.payload.id)
            };
        default:
            return state;
    }
}
export default shopReducer;