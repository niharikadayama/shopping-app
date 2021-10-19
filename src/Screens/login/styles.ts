import { StyleSheet } from "react-native";
import {colors,images,screenWidth,screenHeight} from 'theme'

const styles = StyleSheet.create({
   container:{
     width:screenWidth,
     height:screenHeight,
     backgroundColor: colors.white
   },
   forgetpassword:{
     textAlign:'center',
     paddingVertical:20,
     fontSize:16
   }
})

export default styles
