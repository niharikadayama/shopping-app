import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     
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
         backgroundColor:'rgba(240,240,240,0.8)',
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
         color:'#F67280'
     },
     detailNormal:{
         fontSize:16,
         fontWeight:'600',
         marginBottom:5
     },
     detailColor:{
         flexDirection:'row',
         justifyContent:'space-evenly'
     },
     detailSize:{
         fontSize:17,
         fontWeight:'600',
         marginTop:5,
         borderWidth:1,
         borderColor:'black',
         borderRadius:15,
         paddingHorizontal:5,
         paddingVertical:4
     },
     detailBottom:{
         flexDirection:'row',
         justifyContent:'flex-start',
         alignItems:'center',
         marginTop:15
     },
     
})

export default styles