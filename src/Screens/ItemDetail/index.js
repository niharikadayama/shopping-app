import React from "react";
import{View,Text,TouchableOpacity,ImageBackground,SafeAreaView,Dimensions} from 'react-native'
import styles from "./styles";
import  Icon from "react-native-vector-icons/FontAwesome";
import SecondaryBtn from '../../components/UI/Button/secondaryBtn'

const ItemDetail = ({navigation,route}) =>{
    const item = route.params
    //console.log(item)
    return (
        <SafeAreaView style={{width:'100%',height:Dimensions.get('screen').height}}> 

            <ImageBackground source={item.item.img} resizeMode={'cover'} style={styles.image}>

            <Icon name="arrow-left" size={26} color={'white'} style={styles.iconn}
                onPress={()=>navigation.navigate('details')}/>

            <View style={styles.detailsContainer}>
                
                <Text style={styles.detailName}>{item.item.name}</Text>
                <Text style={styles.detailInfo}>{item.item.info}</Text>
                
                <Icon name="heart" size={20} style={styles.detailHeart}/>

                <Text style={styles.detailNormal}>Color</Text>
                <View style={styles.detailColor}>
                    <Icon name="check-circle" size={40} color={item.item.color}/>
                    <Icon name="circle" size={40} style={{color:'#FFDB58'}}/>
                    <Icon name="circle" size={40} style={{color:'#E77471'}}/>
                </View>

                <Text style={styles.detailNormal}>Size</Text>
                 <View style={styles.detailColor}>
                    <Text style={styles.detailSize}>32</Text>
                    <Text style={styles.detailSize}>34</Text>
                    <Text style={styles.detailSize}>36</Text>
                    <Text style={styles.detailSize}>38</Text>
                    <Text style={styles.detailSize}>40</Text>
                 </View>

                 <View style={styles.detailBottom}> 
                     <Text style={{fontSize:25,fontWeight:'bold'}}>Rs. {item.item.price}</Text>
                     <SecondaryBtn name = {'Add To Cart'} navigation = {navigation} item = {item}/>
                 </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default ItemDetail