import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
        marginHorizontal:10,
        height:'100%'
    },
    image:{
      width:'100%',
      height: 300,
      justifyContent:'center',
      marginVertical:10
    },
    text: {
      position:'absolute',
      top:'50%',
      width:'100%',
      color: "white",
      fontSize: 42,
      lineHeight: 90,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "rgba(0,0,0,0.5)"
    },
    child: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)'
    }
  })

  export default styles