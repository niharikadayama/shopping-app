import { StyleSheet } from "react-native";
import { colors } from "theme";

const styles = StyleSheet.create({
    cartCard:{
         height:160,
         backgroundColor:colors.white,
         marginVertical:15,
         marginHorizontal:15,
        flexDirection:'row',
        justifyContent:'flex-start',
        borderRadius:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardImg:{
        width:140,
        height: '100%',
        borderRadius:15,
    },
    cardText:{
       paddingLeft: 20,
       paddingVertical:10
    },
    cardTitle:{
        fontSize:25,
        fontWeight:'bold'
    },
    cardInfo:{
        fontSize:17,
        paddingVertical:5
    },
    cardIcon:{
       position:'absolute',
       right:10,
       top:10
    },
    quant:{
        flexDirection:'row',
        paddingVertical:15,
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    quantText:{
        fontSize:18,
        fontWeight:'600',
        paddingHorizontal:10
    },
    quantIcon:{
       color: colors.mediumGrey,
       paddingHorizontal:7
    },
    Price:{
        flexDirection:'row',
        paddingTop:10,
        justifyContent:'flex-start',
        alignItems:'center' 
    },
    pricestyle:{
        fontWeight:'bold',
        fontSize:17,
        marginLeft:5
    },
    totalCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:19,
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:colors.darkbg,
        borderRadius:15,
    },
    totalCardText:{
        fontSize:17,
        fontWeight:'500',
        color:'white'
    },
    
})

export default styles