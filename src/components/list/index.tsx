import React, { useContext } from "react";
import { FlatList, SafeAreaView, ImageBackground,View,Text, TouchableOpacity} from "react-native";
import { CategoryContext } from "context/categoryContext";
import styles from "./styles";

const Category = ({navigation}) =>{

  const [data,setdata] = useContext(CategoryContext)

  return <SafeAreaView style={styles.container}>
    <FlatList 
      data= {data}
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