import { StyleSheet } from "react-native";
import { Colors } from "theme";

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    searchContainer:{
        height:50,
        backgroundColor: Colors.lightGrey,
        borderRadius:10,
        marginHorizontal:15,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
     },
     input:{
        fontSize:18,
        fontWeight:'600',
        marginLeft:10
     },
     iconStyle:{
        marginLeft:20
    }
})

export default styles