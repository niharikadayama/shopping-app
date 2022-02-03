import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Colors} from 'theme';

interface IAddress{
    name:string,
    flatNo?:any,
    locality?:string,
    city:string,
    state:string,
    pincode:number,
    phoneNumber: number,
    typeTag:string,
}

const AddressCard = (props:IAddress) =>{
    const {name,flatNo,locality,city,state,pincode,phoneNumber,typeTag} = props

    const TagCheck = () =>{
        if(typeTag === 'default')
            return <View style={styles.typeTag}><Text style={styles.typeTagText}>DEFAULT</Text></View>
        return null
    }

    const MakeDefault = () =>{
        if(typeTag != 'default')
            return <TouchableOpacity><Text style={styles.makeDefault}>Make Default</Text></TouchableOpacity>
        return null
    }

    return(
        <View style={styles.container}>
          {TagCheck()}
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.address}>{flatNo}, {locality}, {city}</Text>
          <Text style={styles.address}>{state} - {pincode}</Text>
          <Text style={styles.contact}>Phone: <Text style={styles.contactNo}>{phoneNumber}</Text></Text>
          <View style={styles.horizontalLine}/>
          <View style={styles.bottomContainer}>
            <TouchableOpacity><Text style={styles.edit}>Edit</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.delete}>Delete</Text></TouchableOpacity>
          {MakeDefault()}
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{
       backgroundColor: Colors.white, 
       alignSelf:'center',
       width: '89%',
       height: 200,
       borderRadius: 15,
       shadowColor: '#000',
       shadowOffset: {
        width: 0,
        height: 6,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    elevation: 5,
       paddingHorizontal:16,
       paddingVertical:16,
   },
   typeTag:{
       backgroundColor: Colors.dullGreen,
       width:'28%',
       borderWidth:1,
       borderRadius:8,
       borderColor: Colors.dullGreen,
   },
   typeTagText:{
       color:Colors.white,
       fontWeight:'500',
       alignSelf:'center'
   },
   name:{
       fontSize: 17,
       fontWeight:'500',
       paddingVertical:8,
   },
   address:{
       fontSize:17,
       color:Colors.darkGrey,
   },
   contact:{
    fontSize:17,
    paddingVertical:8,
    color:Colors.darkGrey,
   },
   contactNo:{
       fontSize:16,
       fontWeight:'600',
   },
   horizontalLine: {
    borderBottomColor: Colors.mediumGrey,
    borderBottomWidth: 1,
    paddingTop:4,
  },
  bottomContainer:{
      flexDirection:'row',
      alignItems:'center',
      paddingVertical:12,
  },
  edit:{
     fontSize:16,
     color: Colors.dullGreen,
  },
  delete:{
      fontSize:16,
      color: Colors.red,
      paddingLeft:28
  },
  makeDefault:{
      fontSize:16,
      color: Colors.blue,
      paddingLeft:28
  }
});

export default AddressCard;