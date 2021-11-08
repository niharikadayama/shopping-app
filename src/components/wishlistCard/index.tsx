import React from "react";
import {View,Text,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";
import {Button} from 'components'


const WishlistCard = ({item,navigation}) =>{
   
    return(
        <View style={styles.cartCard}> 
    
        <Image source={item.item.img} style={styles.cardImg}/>

        <View style={styles.cardText}>
            <Text style={styles.cardTitle}>{item.item.name}</Text>
            <Text style={styles.cardInfo}>{item.item.info}</Text>
            <View style={styles.Price}>
                <Icon name="rupee" size={20}/>
                <Text style={styles.pricestyle}>{item.item.price}</Text>
            </View>
        </View>
        <View style={styles.cardBottom}>
            <Icon name='trash' size={30}/>
            <Button name='Cart' theme='secondary' onPress={()=>navigation.navigate('cart')}/>
        </View>
        
</View>
    )
}

export default WishlistCard;