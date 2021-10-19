import React from "react";
import {View} from 'react-native';
import {Header,Category,SearchBar} from "components"

import styles from "./styles";

const HomeScreen = ({navigation}) =>{
    return <View style={styles.container}>

        <Header leftIcon ={"bars"} rightIcon ={"user-circle-o"} size={26} image = {true}
        onLeftIconPress ={()=>{ navigation.navigate()}}
        onRightIconPress ={()=>{ navigation.navigate('login')}}/>

        <SearchBar/>
        
        <Category navigation = {navigation}/> 

       
    </View>
}


export default HomeScreen