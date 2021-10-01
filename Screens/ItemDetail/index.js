import React from "react";
import{View,Text,TouchableOpacity,Image,SafeAreaView} from 'react-native'
import styles from "./styles";
import  Icon from "react-native-vector-icons/FontAwesome";

const ItemDetail = ({navigation,route}) =>{
    const item = route.params
    //console.log(item)
    return (
        <SafeAreaView style={{flex:1 , backgroundColor:'white'}}> 

            <View style={styles.imgContainer}>
            <Image source={require('../../assets/woman/w1.jpg')} style={{width:'100%',height:600}}/>
            </View>

            <View style={styles.detailsContainer}>
                
                <Text style={styles.detailName}>Indya Kurti</Text>
                <Text style={styles.detailInfo}>Blue mirror Work kurti</Text>
                
                <Icon name="heart" size={20} style={styles.detailHeart}/>

                <Text style={styles.detailNormal}>Color</Text>
                <View style={styles.detailColor}>
                    <Icon name="check-circle" size={40} style={{color:'#AFDCEC'}}/>
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
                     <Text style={{fontSize:25,fontWeight:'bold'}}>Rs. 1600</Text>
                     <TouchableOpacity  onPress={()=>{
                         navigation.navigate('cart')  }}>
                        <Text style={styles.btn}>Add to Cart</Text>
                     </TouchableOpacity>
                 </View>
            </View>
        </SafeAreaView>
    )
}

export default ItemDetail