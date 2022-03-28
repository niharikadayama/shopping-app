import { StyleSheet } from "react-native";
import { Colors } from "theme";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16,
        marginTop:50,  
    },
    titleView:{
        marginTop:24,
        marginBottom:16,
        paddingHorizontal:20
    },
    title:{
       fontSize:30,
       fontWeight:'bold',
       marginBottom:6
    },
    subTitle:{
       color:'#333'
    },
    cartCard:{
         height:160,
         backgroundColor:'white',
         marginVertical:16,
         marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'flex-start',
        borderRadius:16,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 6,
    },
    cardImg:{
        width:140,
        height: '100%',
        borderRadius:16,
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
        fontSize:18,
        paddingVertical:6
    },
    cardIcon:{
       position:'absolute',
       right:10,
       top:10
    },
    quant:{
        flexDirection:'row',
        paddingVertical:16,
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    quantText:{
        fontSize:18,
        fontWeight:'600',
        paddingHorizontal:10
    },
    quantIcon:{
       color:Colors.mediumGrey,
       paddingHorizontal:8
    },
    Price:{
        flexDirection:'row',
        paddingTop:10,
        justifyContent:'flex-start',
        alignItems:'center' 
    },
    totalCard:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal:20,
        paddingVertical:16,
        paddingHorizontal:16,
        backgroundColor: Colors.darkbg,
        borderRadius:16,
    },
    totalCardText:{
        fontSize:18,
        fontWeight:'500',
        color:Colors.white
    },
    
})

export default styles