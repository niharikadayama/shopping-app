import { StyleSheet } from "react-native";
import {colors,images,screenWidth,screenHeight} from 'theme'

const styles = StyleSheet.create({
    logoContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    inputField:{
        flexDirection:'row',
        borderRadius:10,
        borderWidth:1,
        borderColor:colors.transparentlightBg,
        width: 350,
        padding:15,
        marginVertical:10,
        backgroundColor:colors.transparentlightBg,
    },
    inputFieldIcon:{
      color:colors.mediumGrey,
      paddingRight:10
    },
    errorStyle:{
        color:colors.red,
        alignSelf:'stretch'
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
      justifyContent:'center'
    },
    OtherLoginButton:{
      flexDirection:'row',
      alignItems:'center',
      backgroundColor:colors.transparentlightBg,
      paddingHorizontal:19,
      paddingVertical:10
    },
    iconn:{
      fontSize:26,
      paddingHorizontal:10,
    },
    googleIcon:{
      color:colors.googleColor
    },
    facebookIcon:{
      color:colors.facebookColor
    },
    twitterIcon:{
      color:colors.twitterColor
    },
    playStoreIcon:{
      color: colors.darkGrey
    },
    appleIcon:{
      color:colors.appleStore,
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