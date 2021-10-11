import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {View,Text,Image,Button,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";
import PrimaryBtn from '../../components/button/primaryBtn'
import { colors } from "../../assets/arrays/filters";

const Cart = ({navigation,route}) =>{
    const item = route.params

    return (
    <View style={styles.container}>
           <View style={styles.header}>
                <Icon name="arrow-left" size={25} color={colors.darkGrey}
                onPress={()=>navigation.navigate('details')}/>
                
                <Icon name="user-circle-o" size={28} color={colors.darkGrey}
                onPress={()=>navigation.navigate('details')}/>
           </View>

           <View style={styles.titleView}>
                <Text style={styles.title}>My Bag</Text>
                <Text style={styles.subTitle}>Check and Pay your Item</Text>
           </View>

            <View style={styles.cartCard}> 
    
                   <Image source={item.item.item.img} style={styles.cardImg}/>

                    <View style={styles.cardText}>

                        <Text style={{fontSize:25,fontWeight:'bold'}}>{item.item.item.name}</Text>
                        <Text style={{fontSize:17,paddingVertical:5}}>{item.item.item.info}</Text>
                        <Icon name="close" size={20} style={styles.cardIcon}/>
                        <View style={styles.Price}>
                            <Icon name="rupee" size={20}/>
                            <Text style={{fontWeight:'bold',fontSize:17,marginLeft:5}}>{item.item.item.price}</Text>
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
            

            <View style={styles.cartCard}> 
    
                   <Image source={require('../../assets/woman/w6.jpg')} style={styles.cardImg}/>

                    <View style={styles.cardText}>

                        <Text style={{fontSize:25,fontWeight:'bold'}}>White Frock</Text>
                        <Text style={{fontSize:16,paddingVertical:5}}>Floral umbrella dress</Text>
                        <Icon name="close" size={20} style={styles.cardIcon}/>
                        <View style={styles.Price}>
                            <Icon name="rupee" size={20}/>
                            <Text style={{fontWeight:'bold',fontSize:17,marginLeft:5}}>900</Text>
                        </View>

                        <View style={styles.quant}>
                            <Icon name="minus" size={20} style={styles.quantIcon}/>
                            <Text style={styles.quantText}>1</Text>
                            <Icon name="plus" size={20} style={styles.quantIcon}/>
                            <Text style={styles.quantText}>|</Text>
                            <Text style={styles.quantText}>32</Text>
                            <Icon name="chevron-down" size={20} style={styles.quantIcon}/>
                        </View>

                        
                    </View>
             
            </View>
            
            <View style={styles.totalCard}>
               <Text style={styles.totalCardText}>2 Items</Text>
               <Text style={styles.totalCardText}>{`Rs. ${item.item.item.price + 900}`}</Text>
            </View>

            <PrimaryBtn name = {'Checkout'} navigation= {navigation}/>
    </View>
    )
}


export default Cart