import React, {useState,createContext} from "react";
import {images} from 'theme'
import {woman} from 'constant'

export const ItemContext = createContext([]);


export const ItemProvider = props =>{
    const [data,setData] = useState(woman);
      return(
        <ItemContext.Provider value={[data,setData]}>
           {props.children}
        </ItemContext.Provider>
      );
}