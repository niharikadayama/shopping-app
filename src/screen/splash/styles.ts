import { StyleSheet } from "react-native";
import {Colors,screenWidth,screenHeight} from 'theme'

const styles = StyleSheet.create({
    bgStyle:{
        width:screenWidth,
        height:screenHeight
    },
    cardContainer:{
        height: 400,
        width: screenWidth - 20,
        marginHorizontal:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 20,
        position:'absolute',
        bottom:10
    },
    cardTitle:{
       fontSize:30,
       fontWeight:'700',
       paddingBottom:10
    },
    cardSubTitle:{
        fontSize:20,
        fontWeight:'500',
        textAlign:'center',
        paddingBottom:6
     },
     cardButton:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: Colors.darkCoral,
        marginVertical:16,
        paddingVertical:10,
        paddingHorizontal:16,
     },
     cardButtonTitle:{
        color:Colors.white,
        fontSize: 20,
        fontWeight:'600',
        paddingHorizontal:6,
        
     },
     cardButtonIcon:{
        fontSize: 36,
        color:Colors.white,
        paddingHorizontal:6,
       
     }
})

export default styles
