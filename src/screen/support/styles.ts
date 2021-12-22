import {StyleSheet} from 'react-native';
import {colors,screenHeight} from 'theme';

const style = StyleSheet.create({
  container: {
     width: '100%',
     height: screenHeight,
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
    paddingHorizontal: 120,
  },
  cardContainer:{
    flexGrow:1,
    paddingHorizontal:20,
    paddingVertical:5,
    flexDirection:'row',
  },
  card:{
    flexGrow:1,
    alignItems:'flex-start',
    justifyContent:'center',
    paddingHorizontal:20,
    paddingVertical:20,
  },
  cardHeadinglist:{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'center'
  },
  cardHeading:{
    fontSize:20,
    fontWeight:'600',
    paddingLeft:10
  },
  subHeadinglist:{
    marginTop:10,
    paddingHorizontal:30
  },
  subHeadingListbody:{
      fontSize:18,
      lineHeight: 20 * 1.5,
  }
});

export default style;
