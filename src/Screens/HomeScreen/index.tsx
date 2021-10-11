import React from "react";
import {View,Text,Image} from 'react-native'
import Header from "../../components/header"
import Category from "../../components/list";
import SearchBar from "../../components/searchBar";
import styles from "./styles";

const HomeScreen = ({navigation}) =>{
    return <View style={styles.container}>

        <Header icon1={"bars"} icon2={"user-circle-o"} size={26} image = {true}
        onpress1 ={()=>{ navigation.navigate()}}
        onpress2 ={()=>{ navigation.navigate()}}/>

        <SearchBar/>
        
        <Category navigation = {navigation}/> 
    </View>
}


export default HomeScreen