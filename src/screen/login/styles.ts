import { StyleSheet } from "react-native";
import {Images,Colors,screenWidth,screenHeight} from 'theme'

const styles = StyleSheet.create({
   container:{
     width:screenWidth,
     height:screenHeight,
     backgroundColor: Colors.white
   },
   inputContainer:{
    alignItems:'flex-start',
    marginTop:30,
    paddingHorizontal:16
  },
  inputTitle:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:10
  }, 
   forgetpassword:{
    textAlign:'right',
    paddingHorizontal:16,
    paddingVertical:20,
    fontSize:16
  },
  
})

export default styles
