import React from "react";
import { View,Text,TouchableOpacity } from "react-native";
import styles from "./styles";

const SelectedCategory = ({item,navigation}) =>{
    return(
        
           <TouchableOpacity 
             style={styles.buttons}
             onPress={()=>navigation.navigate('details',item)}>
               <Text style={styles.buttonText}>shopppp
               hgfhfhfdgf
               hghhgfghf</Text>
           </TouchableOpacity>
        
    )
}

export default SelectedCategory;