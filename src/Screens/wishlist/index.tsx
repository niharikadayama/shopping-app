import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View,Text} from 'react-native'
import styles from "./styles";
import {Header,WishlistCard} from "components"

const Wishlist = ({navigation,route}) =>{
    const item = route.params
    
    return (
    <View style={styles.container}>
        
           <Header leftIcon={"arrow-left"} rightIcon={"shopping-cart"} size={28}
                onLeftIconPress ={()=>{ navigation.navigate('details') }}
                onRightIconPress ={()=>{ navigation.navigate('cart') }}
                image= {false} />

           <View style={styles.titleView}>
                <Text style={styles.title}>Wishlist</Text>
                <Text style={styles.subTitle}>Buy it before its gone</Text>
           </View>

           <WishlistCard {...item}/>
           
            
    </View>
    )
}


export default Wishlist