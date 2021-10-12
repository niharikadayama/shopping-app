import React from "react";
import {View,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from "./styles"

const SearchBar = () =>{
    return <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} style={styles.iconStyle}/>
                <TextInput placeholder="Search" style={styles.input}/>
            </View>
        </View>
}



export default SearchBar


