import { StyleSheet , Dimensions} from "react-native";

const width = Dimensions.get('window').width/2 - 30

const styles = StyleSheet.create({
    container:{
       width:'100%',
       height:'100%',
       marginVertical:20,
       backgroundColor:'#fff'
    },
    
    card:{
      height: 260,
      backgroundColor: 'hsla(0, 100%, 30%, 0.3)',
      width,
      marginHorizontal: 5,
      borderRadius: 10,
      marginBottom: 20,
      padding:0,
      flex:1,
    },
    cardImg:{
       width:'100%',
       height:190,
       borderRadius:5,
       alignSelf:'center'
    },
    cardText:{
      color:'#FDF7EE',
      fontSize:17,
      fontWeight:'bold'
    },
    cardPrice:{
       color:'#FDF7EE',
       fontSize:18,
    },
    icon:{
       color:'#FDF7EE',
       position:'absolute',
       bottom:26,
       right:19,
    },
    cardBottom:{
       justifyContent:'space-between',
       alignItems:'flex-start',
       padding:8
    },
    
})

export default styles