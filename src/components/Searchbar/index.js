import React from "react";
import {View,Text,Image,StyleSheet,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const SearchBar = () =>{
    return <View style={{marginTop:20,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} style={{marginLeft:20}}/>
                <TextInput placeholder="Search" style={styles.input}/>
            </View>
        </View>
}

const styles = StyleSheet.create({
    searchContainer:{
        height:50,
        backgroundColor:'#F5F5F5',
        borderRadius:10,
        marginHorizontal:15,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
     },
     input:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:10
     },
})

export default SearchBar


