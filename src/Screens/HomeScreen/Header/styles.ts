import { StyleSheet} from "react-native";
import Colors from '../../../components/UI/reusable'

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:70,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        marginTop:50,
    },
    header:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15
    },
    logo:{
        width:100,
        height:100  
    },
    iconStyle:{
        color: Colors.darkGrey
    }
})

export default styles