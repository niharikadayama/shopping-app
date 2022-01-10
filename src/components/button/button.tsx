import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'
import { Colors } from 'theme'

interface button{
    name: string;
    theme: string;
    onPress: () => void
}
const Button = (props: button) =>{
    const {name,theme,onPress} = props
    return(
        <TouchableOpacity style={ theme === 'primary' ? styles.PrimaryButton : styles.SecondaryButton} 
          onPress={onPress}>

          <Text style={theme === 'primary' ? styles.PrimaryButtonText : styles.SecondaryButtonText}>{name}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    PrimaryButton:{
        backgroundColor:Colors.buttonBglight,
        marginVertical:50,
        marginHorizontal:70,
        paddingVertical:14,
        borderRadius:10
    },
    PrimaryButtonText:{
       color:Colors.white,
       textAlign:'center',
       fontSize:20,
       fontWeight:'600'
    },
    SecondaryButton:{
        backgroundColor:Colors.buttonBgdark,
        marginHorizontal:35,
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:10
    },
    SecondaryButtonText:{
       color:Colors.white,
       textAlign:'center',
       fontSize:20,
       fontWeight:'600'
    }
})

export default Button