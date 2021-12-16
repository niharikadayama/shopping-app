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
       paddingVertical:10,
       flexShrink:1
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
       marginLeft:5
    },
    quant:{
        flexDirection:'row',
        paddingVertical:15,
        justifyContent:'space-around',
        alignItems:'center',
    },
    quantText:{
        fontSize:18,
        fontWeight:'600',
        paddingHorizontal:5
    },
    quantRupeeIcon:{
       color: colors.darkGrey,
    },
    Price:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        paddingHorizontal:5,
    },
    pricestyle:{
        fontWeight:'bold',
        fontSize:17
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