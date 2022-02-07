import { StyleSheet } from "react-native";
import {Colors} from 'theme';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingHorizontal: 8,
        paddingVertical:12,
        width:'100%'
    },
    headerSection:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title:{
       fontSize:20,
       fontWeight:'500',
       
    },
    logo:{
        width:100,
        height:100
    },
    iconLeft:{
        color: Colors.darkGrey
    },
    iconRight:{
        color: Colors.darkGrey
    }
})

export default styles