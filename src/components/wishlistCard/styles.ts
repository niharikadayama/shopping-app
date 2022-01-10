import { StyleSheet } from "react-native";
import { Colors } from "theme";

const styles = StyleSheet.create({
    cartCard:{
         width: '50%',
         height: 300,
         backgroundColor:Colors.white,
         marginVertical:15,
         marginHorizontal:15,
        justifyContent:'space-between',
        borderRadius:2,
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
        width: '100%',
        height: 190,
        borderRadius:2,
    },
    cardText:{
        position:'absolute',
        bottom:4,
        left:5
    },
    cardTitle:{
        fontSize:20,
        fontWeight:'bold'
    },
    cardInfo:{
        fontSize:17,
        paddingVertical:5
    },
    Price:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center' 
    },
    pricestyle:{
        fontWeight:'bold',
        fontSize:17,
        marginLeft:5
    },
    cardBottom:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingTop:5,
    },
    cardBottomButtons:{
        flexDirection:'row',
        alignItems:'center',
    },
    cardBottomText:{
        fontSize:17,
        paddingLeft:2
    }
})

export default styles