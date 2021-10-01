import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:140,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        marginTop:30
    },
    logo:{
        width:130,
        height:130,
        marginTop:10
    },
    title:{
        fontSize:40,
        color: '#ce8f86'
    },
    subTitle:{
        fontSize:20,
        fontFamily:'Noteworthy',
        color:'#e6a375'
    },
    textContainer:{
        paddingRight:40,
        paddingTop:30,
        alignItems:'center'
    }
})

export default styles