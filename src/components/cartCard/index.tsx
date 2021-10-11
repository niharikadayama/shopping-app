import React from "react";
import {View,Text,Image,Button,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";

const CartCard = ({image,name,info,price}) =>{
    return(
        <View style={styles.cartCard}> 
    
        <Image source={image} style={styles.cardImg}/>

        <View style={styles.cardText}>

            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardInfo}>{info}</Text>
            <Icon name="close" size={20} style={styles.cardIcon}/>
            <View style={styles.Price}>
                <Icon name="rupee" size={20}/>
                <Text style={styles.pricestyle}>{price}</Text>
            </View>

            <View style={styles.quant}>
                <Icon name="minus" size={20} style={styles.quantIcon}/>
                <Text style={styles.quantText}>1</Text>
                <Icon name="plus" size={20} style={styles.quantIcon}/>
                <Text style={styles.quantText}>|</Text>
                <Text style={styles.quantText}>43</Text>
                <Icon name="chevron-down" size={20} style={styles.quantIcon}/>
            </View>

            
        </View>
</View>
    )
}

export default CartCard;