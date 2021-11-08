import React from "react";
import {View,Text,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";

import { connect } from "react-redux";
import { removeFromCart,incNumber,decNumber } from "redux/shopping/action";
const CartCard = ({itemData,removeFromCart,incNumber,decNumber}) =>{
    
    return(
        <View style={styles.cartCard}> 
    
        <Image source={itemData.img} style={styles.cardImg}/>

        <View style={styles.cardText}>

            <Text style={styles.cardTitle}>{itemData.name}</Text>
            <Text style={styles.cardInfo}>{itemData.info}</Text>
            <Icon name="trash" size={20} style={styles.cardIcon} onPress={()=>{removeFromCart(itemData.id)}}/>
            <View style={styles.Price}>
                <Icon name="rupee" size={20}/>
                <Text style={styles.pricestyle}>{itemData.price}</Text>
            </View>

            <View style={styles.quant}>
                <Icon name="minus" size={20} style={styles.quantIcon} onPress={()=> {incNumber()}}/>
                <Text style={styles.quantText}>{itemData.qty}</Text>
                <Icon name="plus" size={20} style={styles.quantIcon} onPress={()=> {decNumber()}}/>
                <Text style={styles.quantText}>|</Text>
                <Text style={styles.quantText}>43</Text>
                <Icon name="chevron-down" size={20} style={styles.quantIcon}/>
            </View>

            
        </View>
</View>
    )
}

const mapDispatchToProps = dispatch => {
   return{
       removeFromCart: (id:any) => dispatch(removeFromCart(id)),
       incNumber: () => dispatch(incNumber()),
       decNumber: () => dispatch(decNumber()),
   }
}

export default connect(null,mapDispatchToProps)(CartCard);