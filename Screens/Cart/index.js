import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View,Text,Image,Button,TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";


const Cart = ({navigation}) =>{
    return (
        <View style={styles.container}>
           <View style={styles.header}>
                <Icon name="arrow-left" size={30} color={'#ce8f86'}
                onPress={()=>navigation.navigate('details')}/>
                
                <Image 
                source={require('../../assets/images/Nida.png')}
                style={styles.logo}/>
           </View>

           <View style={styles.cartCard}> 
              <View style={styles.cart1}>

                   <Image source={require('../../assets/woman/w1.jpg')} style={styles.cardImg}/>

                    <View style={styles.cardText}>

                        <Text style={{color:'white',fontSize:25,fontWeight:'bold'}}>Indya Kurti</Text>
                            
                        <Text style={{fontSize:17,color:'white',fontWeight:'600',marginTop:5}}>Blue mirror work kurti</Text>
                            
                        <View style={styles.quant}>
                            <Text style={{fontWeight:'bold',fontSize:17,color:'white'}}>Quantity:</Text>
                            <Icon name="plus-square" size={25} color={'#333'} />
                            <Text style={styles.quantText}>1</Text>
                            <Icon name="minus-square" size={25} color={'#333'}/>
                        </View>

                        <View style={styles.Price}>
                            <Text style={{fontWeight:'bold',fontSize:17,color:'white'}}>Price:</Text>
                            <Icon name="rupee" size={20} color={'white'} style={{marginLeft:10}}/>
                            <Text style={{fontWeight:'bold',fontSize:17,color:'white',marginLeft:5}}>1600</Text>
                        </View>
                    </View>
              </View>

              <View style={styles.cart2}>

                 <View style={styles.buttons}>
                     <Icon name="trash" size={20} color={'#ce8f86'}/>
                     <Text style={{fontSize:17,marginLeft:5,color:'#ce8f86'}}>Remove</Text>
                 </View>

                 <View style={styles.buttons}>
                     <Icon name="heart-o" size={20} color={'#ce8f86'}/>
                     <Text style={{fontSize:17,marginLeft:5,color:'#ce8f86'}}>Add to Wishlist</Text>
                 </View>

              </View>
           </View>
        </View>
    )
}


export default Cart