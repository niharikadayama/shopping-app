import React from "react";
import {View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";

const Header = () =>{
    return <View style = {styles.container}>
        <View style={styles.header}>
           <Icon name="arrow-left" size={26} color={'#353d5e'}
            onPress={()=>navigation.navigate('Home')}/>
            <Image source={require('../../../assets/images/Nida.png')} style={styles.logo}/>
            <Icon name="shopping-cart" size={28} color={'#353d5e'}
            onPress={()=>navigation.navigate('cart')}/>
        </View>
       
    </View>
}
export default Header