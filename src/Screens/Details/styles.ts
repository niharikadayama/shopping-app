import { StyleSheet , Dimensions} from "react-native";
import { colors } from "../../assets/arrays/theme";

const width = Dimensions.get('window').width/2 - 30

const styles = StyleSheet.create({
    container:{
       width:'100%',
       height:'100%',
       marginVertical:20,
       backgroundColor: colors.white
    },
    
    card:{
      height: 260,
      backgroundColor: colors.pink,
      width,
      marginHorizontal: 5,
      borderRadius: 10,
      marginBottom: 20,
      padding:0,
      flex:1,
    },
    cardImg:{
       width:'100%',
       height:190,
       borderRadius:5,
       alignSelf:'center'
    },
    cardText:{
      color:colors.offwhite,
      fontSize:17,
      fontWeight:'bold'
    },
    cardPrice:{
       color:colors.offwhite,
       fontSize:18,
    },
    icon:{
       color:colors.offwhite,
       position:'absolute',
       bottom:26,
       right:19,
    },
    cardBottom:{
       justifyContent:'space-between',
       alignItems:'flex-start',
       padding:8
    },
    
})

export default styles