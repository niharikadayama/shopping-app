import React from "react";
import {View,Text,Image,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";
import { useDispatch } from "react-redux";
import { removeFromWishlist, addToCart } from "redux/shopping/action";

const WishlistCard = ({items,navigation,route}) =>{
    const dispatch = useDispatch();
    const item = route.params
    return(
    <View style={styles.cartCard}> 

        <Image source={items.img} style={styles.cardImg}/>

        <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{items.name}</Text>
            <Text style={styles.cardInfo}>{items.info}</Text>

            <View style={styles.Price}>
                <Icon name="rupee" size={20}/>
                <Text style={styles.pricestyle}>{items.price}</Text>
            </View>

            <View style={styles.cardBottom}>
                <TouchableOpacity 
                    onPress={()=>{dispatch(removeFromWishlist(items.id))}}
                    style={styles.cardBottomButtons}>
                    <Icon name='trash' size={22}/>
                    <Text style={styles.cardBottomText}>Remove</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    onPress={() =>{
                        navigation.navigate('cart',item),
                        dispatch(addToCart(items.id))
                    }}
                    style={styles.cardBottomButtons}>
                    <Icon name='shopping-cart' size={22}/>
                    <Text style={styles.cardBottomText}>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>

    </View>
    )
}

export default WishlistCard;