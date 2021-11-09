import * as actionTypes from './types'
import { images } from 'theme';

const INITIAL_STATE = {
    products: [
        {
            id:1,
            name: 'Indya Kurti',
            price: 1600,
            like: false, 
            img: images.w1,
            info: 'Blue mirror Work kurti',
            qty: 1,
            color:'blue'
           
        },
        {
            id:2,
            name: 'Crop Top',
            price: 600,
            like: false,
            img: images.w2,
            info: 'Black knotted crop top',
            qty: 1,
            color:'black'
      
        },
        {
            id:3,
            name: 'Stripped top',
            price: 700,
            like: false,
            img: images.w3,
            info: 'top with yellow Strips',
            qty: 1,
            color:'white',
      
        },
        {
            id:4,
            name: 'Roadstar ',
            price: 1200,
            like: false,
            img: images.w4,
            info: 'Orange top with skirt',
            qty: 1,
            color:'coral'
      
        },
        {
            id:5,
            name: 'Asthetic shirt',
            price: 800,
            like: false,
            img: images.w5,
            info: 'Abstract shirt with half-sleeves',
            qty: 1,
            color:'pink'
      
        },
        {
            id:6,
            name: 'White Frock',
            price: 900,
            like: false,
            img: images.w6,
            info: 'Simple umbrella frock',
            qty: 1,
            color:'white'
      
        }
      ],
    cart: [],
    currentItem: null,
    count:0
}
const shopReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            //get the item data from products array
            const item = state.products.find(prod => prod.id === action.payload.id) 
            // check if item is in chart already
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
        case actionTypes.INCREMENT:
            return {
                ...state,
                
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                
            };
        default:
            return state;
    }
}
export default shopReducer;