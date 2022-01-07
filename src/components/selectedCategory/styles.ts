import { StyleSheet } from "react-native";
import { colors } from "theme";

const styles = StyleSheet.create({
    buttons:{
      position:'absolute',
      right:"30%",
      bottom:"30%",
      backgroundColor:colors.transparentdarkBg,
      paddingHorizontal:25,
      paddingVertical:15
    },
    button:{
      flexDirection:'row'
    },
    buttonText:{
      color:colors.mediumGrey,
      fontWeight:'500',
      fontSize:20,
    },
    sectionIcon:{
      color:colors.mediumGrey,
      paddingLeft:10
    },
})

export default styles;