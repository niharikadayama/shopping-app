import { StyleSheet } from "react-native";
import {Colors,Images,screenHeight} from 'theme';

const styles = StyleSheet.create({
   container:{
       height:screenHeight,
       width:'100%',
       backgroundColor:Colors.lightGrey
   },
   subContainerHeading:{
       fontSize:19,
       fontWeight:'500',
       paddingVertical:16,
       paddingLeft:24,
   },
   addNewAddress:{
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       paddingVertical:28
   },
   addNewAddressIcon:{
       color:Colors.blue
   },
   addNewAddressText:{
       fontSize:17,
       color:Colors.blue
   }
});

export default styles;