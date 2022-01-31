import {StyleSheet} from 'react-native';
import {Colors, screenHeight} from 'theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
    backgroundColor:Colors.white
  },
  headerSection:{
    backgroundColor: Colors.lightPurple
  },
  header: {
    marginTop: 60,
    marginBottom:20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerHeading: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal:120
  },
  profile:{
    width: 150, 
    height: 150, 
    borderRadius: 150 / 2,
    alignSelf:'center'
  },
  profileName:{
   fontSize:19,
   fontWeight: '600',
   alignSelf:'center',
   marginVertical:15,
  },
  section:{
    marginTop:15,
    marginHorizontal:20
  },
  sectionHeading:{
    fontSize:18,
    fontWeight:'500',
  },
  sectionBody:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     marginHorizontal:15,
     marginVertical:15,
  },
  sectionIcon:{
    color:Colors.mediumGrey
  },
  body:{
    flexDirection:'row',
    alignItems:'center',
  },
  sectionText:{
    marginLeft:12,
    fontSize:18
  },
  
});

export default styles;
