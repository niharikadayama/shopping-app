import { StyleSheet } from "react-native";
import {Colors,screenWidth,screenHeight} from 'theme'

const styles = StyleSheet.create({
  container:{
    width:screenWidth,
    height:screenHeight,
    backgroundColor: Colors.white
  },
  inputContainer:{
    alignItems:'flex-start',
    paddingHorizontal:16
  },
  inputTitle:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:10
  }, 
})

export default styles
