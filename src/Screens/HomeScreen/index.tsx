import React from "react";
import {View,Text,Image} from 'react-native'
import Header from './Header'
import Category from "../../components/homeCategory";
import SearchBar from "../../components/searchBar";
import styles from "./styles";

const HomeScreen = ({navigation}) =>{
    return <View style={styles.container}>
        <Header/>
        <SearchBar/>
        <Category navigation = {navigation}/> 
    </View>
}


export default HomeScreen