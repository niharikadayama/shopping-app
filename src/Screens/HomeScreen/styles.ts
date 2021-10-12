import { StyleSheet,Dimensions } from "react-native";
import { colors } from "../../assets/arrays/theme";

const styles = StyleSheet.create({
    container:{
       width:'100%',
       height: Dimensions.get('window').height,
       backgroundColor:colors.white
    },
  
})

export default styles