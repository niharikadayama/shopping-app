import React ,{useState} from "react";
import {View,Text,TouchableOpacity,FlatList} from 'react-native'
import styles from "./styles"
const Filters = ['POPULAR','CASUAL','ETHNIC','SPORTS']

    

    const FilterList = ({onPress}) =>{
        return(
            <View style={styles.filterlist}>
               <FlatList 
                numColumns = {4}
                data = {Filters}
                renderItem={({item,index})=>{
                    return <TouchableOpacity onPress = {onPress}> 
                    <Text key={index}
                    style={[styles.filterlistText, index==0 && styles.filterlistTextSelected]}>
                    {item}</Text>

                   </TouchableOpacity>
                }}
                />
            </View>
        )
    }

    export default FilterList