import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
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

            <View style={styles.quant}>
                <View style={styles.quantUpDownCounter}>
                <Icon name="minus" size={18} style={styles.quantIcon} onPress={()=> {incNumber()}}/>
                <Text style={styles.quantText}>{itemData.qty}</Text>
                <Icon name="plus" size={18} style={styles.quantIcon} onPress={()=> {decNumber()}}/>
                </View>
                <Text style={styles.quantText}>|</Text>
                <View style={styles.Price}>
                <Icon name="rupee" size={18} style={styles.quantRupeeIcon}/>
                <Text style={styles.pricestyle}>{itemData.price}</Text>
                </View>
               
            </View>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
            onPress={()=>{removeFromCart(itemData.id)}}>
            <Icon name="trash" size={23} style={styles.cardIcon} />
            <Text style={styles.quantText}>Remove</Text>
            
            </TouchableOpacity>
            
            
        </View>
</View>
    )
}

const mapDispatchToProps = dispatch => {
   return{
       removeFromCart: (id) => dispatch(removeFromCart(id)),
       incNumber: (id,value) => dispatch(incNumber(id,value)),
       decNumber: (id,value) => dispatch(decNumber(id,value)),
   }
}

export default connect(null,mapDispatchToProps)(CartCard);