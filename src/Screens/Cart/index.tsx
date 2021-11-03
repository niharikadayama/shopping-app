import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View,Text} from 'react-native'
import styles from "./styles";
import {Header,CartCard,Button} from "components"



const Cart = ({navigation,route}) =>{
    const item = route.params
    
    return (
    <View style={styles.container}>
        
           <Header leftIcon={"arrow-left"} rightIcon={"user-circle-o"} size={28}
                onLeftIconPress ={()=>{ navigation.navigate('details') }}
                onRightIconPress ={()=>{ navigation.navigate('details') }}
                image= {false} />

           <View style={styles.titleView}>
                <Text style={styles.title}>My Bag</Text>
                <Text style={styles.subTitle}>Check and Pay your Item</Text>
           </View>

        
           <CartCard  {...item}/>
            
            <View style={styles.totalCard}>
               <Text style={styles.totalCardText}>1 item</Text>
               <Text style={styles.totalCardText}>{`Rs. ${item.item.price}`}</Text>
            </View>

            <Button name = {'Checkout'}  theme={'primary'} 
            onPress={()=>{
            navigation.navigate('Home')}}/>
    </View>
    )
}


export default Cart