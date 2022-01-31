import React, {useState,useEffect} from "react";
import {View,Text,FlatList} from 'react-native'
import styles from "./styles";
import {Header,CartCard,Button} from "components"
import {useSelector} from "react-redux";

const Cart = ({navigation,route}) =>{
    const item = route.params
    const [totalPrice,setTotalPrice] = useState(0);
    const [totalItem,setTotalItem] = useState(0);
    const myCart = useSelector((state)=>{
      return state.shop.cart
   })

    useEffect(()=>{
       let items = 0;
       let price = 0;

       myCart.forEach((item: { qty: number; price: number; }) =>{
            items += item.qty,
            price += item.qty * item.price
       })

       setTotalItem(items);
       setTotalPrice(price);
    },[myCart,totalPrice,totalItem,setTotalPrice,setTotalItem])

    return (
     <View style={styles.container}>
           <Header leftIcon={"arrow-left"} rightIcon={"user-circle-o"} size={28}
                onLeftIconPress ={()=>{ navigation.navigate('root') }}
                onRightIconPress ={()=>{ navigation.navigate('profile') }}
                image= {false} />

           <View style={styles.titleView}>
                <Text style={styles.title}>My Bag</Text>
                <Text style={styles.subTitle}>Check and Pay your Item</Text>
           </View>
               
            <FlatList 
               data={myCart}
               renderItem = { ( {item}) =>{
                   return(
                    <CartCard key={item.id} itemData={item}/>  
                   )
               }}
            />
            
            <View style={styles.totalCard}>
               <Text style={styles.totalCardText}>{totalItem} items</Text>
               <Text style={styles.totalCardText}>{`Rs. ${totalPrice}`}</Text>
            </View>

            <Button name = {'Checkout'}  theme={'primary'} 
               onPress={()=>{navigation.navigate('Home')}}/>
     </View>
    )
}

// const mapStateToProps = state =>{
//      return{
//          cart: state.shop.cart
//      }
// }

export default Cart;