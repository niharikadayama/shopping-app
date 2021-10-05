import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'

const PrimaryBtn = ({name,navigation,item}) =>{
    return(
        <TouchableOpacity style={styles.btn} onPress={()=>{
            navigation.navigate('cart',{item})}}>
           <Text style={styles.btnText}>{name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'rgb(60, 60, 60)',
        marginHorizontal:35,
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:20
    },
    btnText:{
        color:'white',
       textAlign:'center',
       fontSize:20,
       fontWeight:'600'
    }
})

export default PrimaryBtn