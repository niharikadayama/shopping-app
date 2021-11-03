import React from "react";
import{View,Text,ImageBackground,SafeAreaView,FlatList} from 'react-native'
import { ItemContext } from "context/itemContext";
import styles from "./styles";
import Icon from 'react-native-vector-icons/FontAwesome'
import {Button} from "components";
import {colors, size} from "theme"

const ItemDetail = ({navigation,route}) =>{
    const item = route.params
    return (
        <SafeAreaView style={styles.container}> 

            <ImageBackground source={item.item.img} resizeMode={'cover'} style={styles.image}>

            <Icon name="arrow-left" size={26} color={colors.white} style={styles.iconn}
                onPress={()=>navigation.navigate('details')}/>

            <View style={styles.detailsContainer}>
                
                <Text style={styles.detailName}>{item.item.name}</Text>
                <Text style={styles.detailInfo}>{item.item.info}</Text>
                
                <Icon name="heart" size={20} style={styles.detailHeart}
                onPress={()=>navigation.navigate('Wishlist',{item})}/>

                <Text style={styles.detailNormal}>Color</Text>
                <View style={styles.detailColor}>
                    <Icon name="check-circle" size={40} color={item.item.color}/>
                    <Icon name="circle" size={40} color={colors.yellow}/>
                    <Icon name="circle" size={40} color={colors.coral}/>
                </View>

                <Text style={styles.detailNormal}>Size</Text>
                 <FlatList numColumns={4}
                     data={size} renderItem = {({item,index})=>{
                     return <View style={styles.detailColor}>
                             <Text style={styles.detailSize}>{item}</Text>
                            </View>
                     }}
                 />

                 <View style={styles.detailBottom}> 
                     <Text style={styles.detailPrice}>Rs. {item.item.price}</Text>

                     <Button name = {'Add To Cart'} onPress={()=>{
                         navigation.navigate('cart',item)
                     }} theme = {'secondary'} />

                 </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ItemDetail