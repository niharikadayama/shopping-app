import { StyleSheet } from "react-native"
import {colors} from '../../assets/arrays/filters'

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:10,
        height:'100%'
    },
    image:{
      width:'100%',
      height: 300,
      justifyContent:'center',
      marginVertical:10
    },
    text: {
      position:'absolute',
      top:'50%',
      width:'100%',
      color: "white",
      fontSize: 42,
      lineHeight: 90,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: colors.transparentBg
    },
    child: {
      flex: 1,
      backgroundColor: colors.transparentBg
    }
  })

  export default styles