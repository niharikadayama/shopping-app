import React from "react";
import{View,Text,ImageBackground,SafeAreaView,FlatList} from 'react-native'
import { connect } from "react-redux";
import { addToCart,addToWishlist } from "redux/shopping/action"; 
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Button} from "components";
import {Colors, size} from "theme"

const ItemDetail = ({navigation,route, addToCart, addToWishlist}) =>{
    const item = route.params
    const sizeCheck = item.size
    return (
        <SafeAreaView style={styles.container}> 

            <ImageBackground source={item.img} resizeMode={'cover'} style={styles.image}>

            <Icon name="arrow-left" size={26} color={Colors.white} style={styles.icon}
                onPress={()=>navigation.navigate('root')}/>

            <View style={styles.detailsContainer}>
                
                <Text style={styles.detailName}>{item.name}</Text>
                <Text style={styles.detailInfo}>{item.info}</Text>
                
                <Icon name="heart" size={22} style={styles.detailHeart}
                onPress={()=>{
                    navigation.navigate('wishlist',item),
                    addToWishlist(item.id)
                }}/>

                <Text style={styles.detailNormal}>Color</Text>
                <View style={styles.detailColor}>
                    <Icon name="check-circle" size={40} color={item.color}/>
                    <Icon name="circle" size={40} color={Colors.yellow}/>
                    <Icon name="circle" size={40} color={Colors.coral}/>
                </View>

                <Text style={styles.detailNormal}>Size</Text>
                 <FlatList numColumns={4}
                     data={size} renderItem = {({item,index})=>{
                         if(sizeCheck === item){
                            return <View style={styles.detailColor}>    
                            <Text style={[styles.detailSize,styles.selectedDetailSize]}>{item}</Text>
                           </View>
                         }
                         return <View style={styles.detailColor}>
                            <Text style={styles.detailSize}>{item}</Text>
                           </View>
                     }}
                 />
                

                 <View style={styles.detailBottom}> 
                     <Text style={styles.detailPrice}>Rs. {item.price}</Text>

                     <Button name = {'Add To Cart'} onPress={()=>{
                         navigation.navigate('cart',item),
                         addToCart(item.id)
                     }} theme = {'secondary'} />

                 </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const mapDisptachToProp = (dispatch) =>{
    return{
        addToCart: (id) => dispatch(addToCart(id)),
        addToWishlist: (id: number) => dispatch(addToWishlist(id))
    }
}

export default connect(null,mapDisptachToProp)(ItemDetail)
