import { StyleSheet } from "react-native";
import {colors,images,screenWidth,screenHeight} from 'theme'

const styles = StyleSheet.create({
    logoContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    inputContainer:{
        alignItems:'flex-start',
        marginTop:30,
        paddingHorizontal:15
    },
    inputTitle:{
        fontSize:22,
        fontWeight:'600',
        marginBottom:10
    },
    inputField:{
        borderRadius:10,
        width:'100%',
        padding:15,
        marginVertical:10,
        backgroundColor:colors.transparentlightBg,
    },
    loginButton:{
        borderRadius:14,
        width:'100%',
        padding:12,
        marginVertical:10,
        backgroundColor:colors.darkCoral
    },
    loginButtonText:{
        color:colors.white,
        textAlign:'center',
        fontSize:20,
        fontWeight:'800'
    },
    BottomContainer:{
      paddingHorizontal:15,
      marginVertical:10,
      height:150,
      justifyContent:'space-around'
    },
    Container1:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-around',
      
    },
    OtherLoginButton:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:colors.transparentlightBg,
      paddingHorizontal:19,
      paddingVertical:10
    },
    OtherIcon:{
      fontSize:24,
      paddingHorizontal:5,
      color:colors.coral
    },
    IconText:{
      fontSize: 18
    },
    Container2:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },
    Container2Text1:{
      fontSize:16,
      paddingHorizontal:5
    },
    Container2Text2:{
      fontSize:18,
      fontWeight:'600',
      color:colors.darkCoral
    }
})

export default styles