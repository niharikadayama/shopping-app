import { StyleSheet , Dimensions} from "react-native";
import { colors } from "../../assets/arrays/theme";

const styles = StyleSheet.create({
     container:{
        width:'100%',height:Dimensions.get('screen').height
     },
     image:{
            width:'100%',
            height: '100%',
            justifyContent:'center',
            alignItems:'center'
     },
     iconn:{
        position:'absolute',
        top:10,
        left:10
     },

     detailsContainer:{
         position:'absolute',
         bottom:2,
         width:'90%',
         backgroundColor: colors.transparentlightBg,
         borderRadius:20,
         padding:10,
         paddingLeft:20
     },
     detailName:{
         fontSize:23,
         fontWeight:'bold',
         marginBottom:10
     },
     detailInfo:{
         fontSize:16,
         marginBottom:10
     },
     detailHeart:{
         position:'absolute',
         top:25,
         right:20,
         color: colors.red
     },
     detailNormal:{
         fontSize:16,
         fontWeight:'600',
         marginBottom:5
     },
     detailColor:{
         flexDirection:'row',
         justifyContent:'space-evenly',
     },
     detailSize:{
         fontSize:17,
         fontWeight:'600',
         marginTop:5,
         borderWidth:1,
         borderColor:'black',
         borderRadius:15,
         paddingHorizontal:5,
         paddingVertical:4,
         marginHorizontal:19
     },
     detailBottom:{
         flexDirection:'row',
         justifyContent:'flex-start',
         alignItems:'center',
         marginTop:15
     },
     
})

export default styles