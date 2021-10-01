import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        marginTop:15
    },
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
        paddingTop:20
    },
    logo:{
        width:100,
        height:100,
        marginTop:5
    },
    cartCard:{
        flex:0.35,
         backgroundColor:'#ce8f86',
         marginHorizontal:7,
         marginBottom:7,
         borderRadius:20,
         marginTop:30,
         padding:10,
         
    },
    cart1:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    cardImg:{
        width:140,
        height:170,
       
        borderRadius:16
    },
    cardText:{
        paddingRight:30
        
    },
    quant:{
        flexDirection:'row',
        marginVertical:15,
        justifyContent:'space-between',
        alignItems:'center'
    },
    quantText:{
        borderWidth:1,
        borderColor:'white',
        backgroundColor:'white',
        paddingHorizontal:5,
        paddingVertical:2
    },
    Price:{
        flexDirection:'row',
        marginVertical:5,
        justifyContent:'flex-start',
        alignItems:'center' 
    },
    cart2:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        paddingTop:10
    },
    buttons:{
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'white',
        borderRadius:10,
        paddingVertical:8,
        paddingHorizontal:10,
        backgroundColor:'white',
        marginLeft:30,
        
    }
})

export default styles