import { StyleSheet } from "react-native";
import { Colors,screenWidth,screenHeight } from "theme";

const styles = StyleSheet.create({
   container:{
     width:screenWidth,
     height:screenHeight,
     alignItems:'center',
     marginTop:40,
   },
   subContainer:{
      // height:600,
      paddingVertical:40,
      paddingHorizontal:16,
      marginVertical:50,
      backgroundColor: Colors.white,
      marginHorizontal: 12,
      borderRadius: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 4,
   },
   closeIcon:{
     position:'absolute',
     right:20,
     top:16
   },
   heading:{
     fontSize:24,
     fontWeight:'700',
     paddingTop:18,
   },
   subHeading:{
     fontSize:16,
     fontWeight:'500',
     paddingVertical:12
   },
   feedbackInputBox:{
      borderWidth:1,
      borderRadius:8,
      width:340,
      height:140,
      borderColor:Colors.mediumGrey,
      marginBottom:8
   },
   emojiContainer:{
      flexDirection:'row',
      justifyContent:"space-evenly",
      alignItems:'center',
      paddingVertical:12
   },
   emoji:{
      fontSize:28,
   },
   buttonContainer:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-evenly',
   }
})

export default styles;