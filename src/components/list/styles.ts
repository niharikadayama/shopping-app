import { StyleSheet } from "react-native"
import {colors,screenHeight,screenWidth} from 'theme'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subContainer:{
    width:screenWidth,
    height:screenHeight,
  },
  imageStyle:{
    flex:1,
    resizeMode:'cover',
  },
  headers:{
    position:'absolute',
    top:100,
    width:screenWidth
  },
  tabs:{
    color: colors.white
  },
  headerBody:{
    justifyContent:'space-evenly',
    flex:1,
    flexDirection:'row',
    backgroundColor:colors.white
  },
  });
  export default styles;