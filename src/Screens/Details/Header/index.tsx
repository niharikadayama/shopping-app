import React from "react";
import {View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";
import { colors } from "../../../assets/arrays/filters";
import { images } from "../../../assets/arrays/filters";

const Header = ({navigation}) =>{
    return <View style = {styles.container}>
        <View style={styles.header}>
           <Icon name="arrow-left" size={26} color={colors.darkGrey}
            onPress={()=>navigation.navigate('Home')}/>
            <Image source={images.logo} style={styles.logo}/>
            <Icon name="shopping-cart" size={28} color={colors.darkGrey}
            onPress={()=>navigation.navigate('cart')}/>
        </View>
       
    </View>
}
export default Header