import { StyleSheet } from "react-native";
import {colors,images,screenWidth,screenHeight} from 'theme'

const styles = StyleSheet.create({
   container:{
     width:screenWidth,
     height:screenHeight,
     backgroundColor: colors.white
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
   forgetpassword:{
    textAlign:'right',
    paddingHorizontal:15,
    paddingVertical:20,
    fontSize:16
  },
  
})

export default styles
