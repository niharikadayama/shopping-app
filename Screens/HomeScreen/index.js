import React from "react";
import {View,Text,Image} from 'react-native'
import Header from '../../components/Header'
import Category from "../../components/HomeCategory";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

const HomeScreen = ({navigation}) =>{
    return <View style={styles.container}>
       <Header/>
        <Category navigation = {navigation}/> 
    </View>
}


export default HomeScreen