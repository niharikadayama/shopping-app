import React from "react";
import {View,Text,Image} from 'react-native';
import styles from "./styles";

const Header = () =>{
    return <View style = {styles.container}>
        <Image 
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        />
        <View style = {styles.textContainer}>
        <Text style={styles.title}>NIDA </Text>
        <Text style={styles.subTitle}>Fashion That Suits All</Text>
        </View>
    </View>
}
export default Header