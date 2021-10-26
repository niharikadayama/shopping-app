import { StyleSheet } from "react-native";
import {colors,images,screenWidth,screenHeight} from 'theme'

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
       fontWeight:'800',
       paddingBottom:10
    },
    cardSubTitle:{
        fontSize:20,
        fontWeight:'600',
        textAlign:'center',
        paddingBottom:5
     },
     cardButton:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: colors.darkCoral,
        marginVertical:15,
        paddingVertical:10,
        paddingHorizontal:15,
     },
     cardButtonTitle:{
        color:colors.white,
        fontSize: 19,
        fontWeight:'600',
        paddingHorizontal:5,
        
     },
     cardButtonIcon:{
        fontSize: 35,
        color:colors.white,
        paddingHorizontal:5,
       
     }
})

export default styles
