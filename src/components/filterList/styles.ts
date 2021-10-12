import {StyleSheet} from 'react-native';
import {colors} from 'theme'

const styles = StyleSheet.create({
    filterlist:{
        flexDirection:'row',
        marginVertical:20,
        justifyContent:'space-between',
        marginHorizontal:20,
     },
     filterlistText:{
        fontSize:16,
        fontWeight:'bold',
        marginRight:18
     },
     filterlistTextSelected:{
        color:colors.darkCoral,
        paddingBottom:5,
        fontSize:17,
        marginRight:18
     },
})

export default styles
