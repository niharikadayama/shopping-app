import React, {useState,createContext} from "react";
import {images} from 'theme'

interface ICategory{
  id: string,
  title: string,
  image: any
}
export const CategoryContext = createContext([]);

export const CategoryProvider = props =>{
    const [data,setData] = useState<ICategory[]>([
        {
          id: "1",
          title: "Women",
          image:images.woman,
        },
        {
          id: "2",
          title: "Men",
          image:images.man
        },
        {
          id: "3",
          title: "Kids",
          image: images.kid
        },
        {
          id: "4",
          title: "50% off",
          image: images.new
        },
      ]);
      return(
        <CategoryContext.Provider value={[data,setData]}>
           {props.children}
        </CategoryContext.Provider>
      );
}