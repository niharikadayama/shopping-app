import React from "react";
import {View,Text,Image,Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";
import InputSpinner from "react-native-input-spinner";
import { connect } from "react-redux";
import { removeFromCart, adjustQty } from "redux/shopping/action";

const CartCard = ({itemData,removeFromCart,adjustQty}) =>{
    
    return(
        <View style={styles.cartCard}> 
    
        <Image source={itemData.img} style={styles.cardImg}/>

        <View style={styles.cardText}>

            <Text style={styles.cardTitle}>{itemData.name}</Text>
            <Text style={styles.cardInfo}>{itemData.info}</Text>

            <View style={styles.quant}>
                <View>
                    <InputSpinner
                        max={9}
                        min={1}
                        step={1}
                        fontSize={16}
                        width={100}
                        height={30}
                        value={itemData.qty}
                        onChange={(num)=>{adjustQty(itemData.id,num)}}/>
                </View>
                <Text style={styles.quantText}>|</Text>
                <View style={styles.Price}>
                <Icon name="rupee" size={18} style={styles.quantRupeeIcon}/>
                <Text style={styles.pricestyle}>{itemData.price}</Text>
                </View>
               
            </View>
            
            <Pressable style={{flexDirection:'row',alignItems:'center'}}
            onPress={()=>{removeFromCart(itemData.id)}}>
            <Icon name="trash" size={23} style={styles.cardIcon} />
            <Text style={styles.quantText}>Remove</Text>
            
            </Pressable>
            
            
        </View>
</View>
    )
}

const mapDispatchToProps = dispatch => {
   return{
       removeFromCart: (id) => dispatch(removeFromCart(id)),
       adjustQty: (id,value) => dispatch(adjustQty(id,value))
   }
}

export default connect(null,mapDispatchToProps)(CartCard);