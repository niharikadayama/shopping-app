import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'

const PrimaryBtn = ({name,navigation}) =>{
    return(
        <TouchableOpacity style={styles.btn} onPress={()=>{
            navigation.navigate('Home')}}>

          <Text style={styles.btnText}>{name}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor:'rgba(255, 99, 71, 0.5)',
        marginVertical:50,
        marginHorizontal:70,
        paddingVertical:14,
        borderRadius:25
    },
    btnText:{
       color:'white',
       textAlign:'center',
       fontSize:20,
       fontWeight:'600'
    }
})

export default PrimaryBtn