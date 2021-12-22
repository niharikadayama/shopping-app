import React ,{useState} from "react";
import {View,Text,Image, TouchableOpacity,FlatList} from 'react-native'
import { connect } from "react-redux";
import { woman } from "constant";
import Icon from 'react-native-vector-icons/FontAwesome';
import {SearchBar,Header} from "components"
import styles from "./styles";

const Details = ({navigation,route}) =>{
    const item = route.params
    console.log(item.key)
    let dataa = ()=>{
        let data
        if(item.key === "woman"){
            return data = woman
        }
    }

    return (
        <View style={styles.container}>
            
            <Header leftIcon ={"arrow-left"} rightIcon ={"shopping-cart"} size={28}
                onLeftIconPress ={()=>{ navigation.navigate('Home') }}
                onRightIconPress ={()=>{ navigation.navigate('cart') }}
                image= {true} />

            <SearchBar/>

             
            
            <FlatList 
            numColumns={2}
            data={dataa}
            renderItem={({item})=>{
                return (
                    <TouchableOpacity style={styles.card} 
                          onPress={()=>{
                              navigation.navigate('ItemDetail',item)
                          }}
                    >

                        <View > 
                           <Image source={item.img} style={styles.cardImg}/>
                        </View>

                        <Icon name="gittip" size={30} style={styles.icon} 
                         />

                        <View style={styles.cardBottom}>
                            <Text style={styles.cardText}>{item.name}</Text>
                            <Text style={styles.cardPrice}>Rs. {item.price}</Text>  
                        </View>

                    </TouchableOpacity>
                )
            }

            }/>
            
        </View>
    )
}

const mapStateToProps = state => {
   return{
       products: state.shop.products
   }
}

export default connect(mapStateToProps)(Details);