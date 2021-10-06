import React from "react";
import {View,Text,Image} from 'react-native'
import Header from './Header'
import Category from "../../components/HomeCategory";
import SearchBar from "../../components/Searchbar";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

const HomeScreen = ({navigation}) =>{
    return <View style={styles.container}>
        <Header/>
        <SearchBar/>
        <Category navigation = {navigation}/> 
    </View>
}


export default HomeScreen