import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'
import { colors } from 'theme'

interface Ibutton{
    name: string;
    theme: string;
    onPress: () => void
}
const Button = (props: Ibutton) =>{
    const {name,theme,onPress} = props
    return(
        <TouchableOpacity style={ theme === 'primary' ? style1.btn : style2.btn} 
          onPress={onPress}>

          <Text style={theme === 'primary' ? style1.btnText : style2.btnText}>{name}</Text>

        </TouchableOpacity>
    )
}

const style1 = StyleSheet.create({
    btn:{
        backgroundColor:colors.buttonBglight,
        marginVertical:50,
        marginHorizontal:70,
        paddingVertical:14,
        borderRadius:25
    },
    btnText:{
       color:colors.white,
       textAlign:'center',
       fontSize:20,
       fontWeight:'600'
    }
})

const style2 = StyleSheet.create({
    btn:{
        backgroundColor:colors.buttonBgdark,
        marginHorizontal:35,
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:20
    },
    btnText:{
        color:colors.white,
       textAlign:'center',
       fontSize:20,
       fontWeight:'600'
    }
})

export default Button