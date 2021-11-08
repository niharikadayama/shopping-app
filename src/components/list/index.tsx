import React from "react";
import { FlatList, SafeAreaView, ImageBackground,View,Text, TouchableOpacity} from "react-native";
import { categories } from "constant";
import styles from "./styles";

const Category = ({navigation}) =>{

  return <SafeAreaView style={styles.container}>
    <FlatList 
      data= {categories}
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