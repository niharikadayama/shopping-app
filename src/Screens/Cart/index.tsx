import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View,Text,Image,Button,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";
import Header from "../../components/header";
import CartCard from '../../components/cartCard'
import Buttonn from "../../components/button/button";
import { images } from "../../assets/arrays/theme";

const Cart = ({navigation,route}) =>{
    const item = route.params

    return (
    <View style={styles.container}>
        
           <Header icon1={"arrow-left"} icon2={"user-circle-o"} size={28}
                onpress1 ={()=>{ navigation.navigate('details') }}
                onpress2 ={()=>{ navigation.navigate('details') }}
                image= {false} />

           <View style={styles.titleView}>
                <Text style={styles.title}>My Bag</Text>
                <Text style={styles.subTitle}>Check and Pay your Item</Text>
           </View>

           <CartCard  image={item.item.item.img}
                name={item.item.item.name}
                info={item.item.item.info}
                price={item.item.item.price}/>

           <CartCard  image={images.w6}
                name={'White Frock'}
                info={'Floral umbrella dress'}
                price={'900'}/>   
            
            <View style={styles.totalCard}>
               <Text style={styles.totalCardText}>2 Items</Text>
               <Text style={styles.totalCardText}>{`Rs. ${item.item.item.price + 900}`}</Text>
            </View>

            <Buttonn name = {'Checkout'}  theme={'primary'} 
            onPress={()=>{
            navigation.navigate('Home')}}/>
    </View>
    )
}


export default Cart