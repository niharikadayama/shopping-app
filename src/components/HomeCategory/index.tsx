import React, { useState } from "react";
import { FlatList, SafeAreaView, ImageBackground,View,StatusBar, StyleSheet, Text, TouchableOpacity, Image, TextInput} from "react-native";
import DATA from '../../assets/arrays/homeData'
import styles from "./styles";

const Category = ({navigation}) =>{
  return <SafeAreaView style={styles.container}>
    <FlatList 
      data={DATA}
      renderItem={(item)=>{
       return(
         <TouchableOpacity onPress={()=>navigation.navigate('details')}>
            <ImageBackground source={item.item.image} resizeMode="cover" style={styles.image}>
            <View style={styles.child}>
            <Text style={styles.text}>{item.item.title}</Text>
            </View>
            </ImageBackground>
         </TouchableOpacity>
       )
    }}/>
  </SafeAreaView>
}

export default Category;