import React from "react";
import {View,Text,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles";

const Header = () =>{
    return <View style = {styles.container}>
        <View style={styles.header}>
        <Icon name="bars" size={25} color={'#353d5e'}/>
        <Image source={require('../../../assets/images/Nida.png')} style={styles.logo}/>
        <Icon name="user-circle-o" size={25} color={'#353d5e'}/>
        </View>
       
    </View>
}
export default Header