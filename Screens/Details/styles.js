import { StyleSheet , Dimensions} from "react-native";

const width = Dimensions.get('window').width/2 - 30

const styles = StyleSheet.create({
    container:{
       width:'100%',
       height:'100%',
       marginVertical:20,
       backgroundColor:'#fff'
    },
    subContainer:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginVertical:15,
      paddingHorizontal:25,
      paddingVertical:30,
    },
    logo:{
    width:100,
    height:100,
    alignSelf:'center',
    position:'absolute',
    marginTop:15
    },
    searchContainer:{
       height:50,
       backgroundColor:'#FDF7EE',
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
    SortBtn:{
      marginRight:9
    },
    filterlist:{
       flexDirection:'row',
       marginVertical:20,
       justifyContent:'space-between',
       marginHorizontal:20,
    },
    filterlistText:{
       fontSize:16,
       fontWeight:'bold',

    },
    filterlistTextSelected:{
       color:'#ce8f86',
       paddingBottom:5,
       fontSize:17
    },
    card:{
      height: 260,
      backgroundColor: '#ce8f86',
      width,
      marginHorizontal: 5,
      borderRadius: 10,
      marginBottom: 20,
      padding: 5,
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
       bottom:29,
       right:19
       
    },
    cardBottom:{
       justifyContent:'space-between',
       alignItems:'flex-start',
       padding:8
    },
    
})

export default styles