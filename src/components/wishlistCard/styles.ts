import { StyleSheet } from "react-native";
import { Colors } from "theme";

const styles = StyleSheet.create({
    cartCard:{
         width: '50%',
         height: 300,
         backgroundColor:Colors.white,
         marginVertical:16,
         marginHorizontal:16,
        justifyContent:'space-between',
        borderRadius:2,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 4,
    },
    cardImg:{
        width: '100%',
        height: 190,
        borderRadius:2,
    },
    cardText:{
        position:'absolute',
        bottom:4,
        left:4
    },
    cardTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    cardInfo:{
        fontSize:18,
        paddingVertical:6
    },
    Price:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center' 
    },
    pricestyle:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:6
    },
    cardBottom:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingTop:6,
    },
    cardBottomButtons:{
        flexDirection:'row',
        alignItems:'center',
    },
    cardBottomText:{
        fontSize:18,
        paddingLeft:2
    }
})

export default styles