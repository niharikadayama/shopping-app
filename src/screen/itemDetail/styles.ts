import {StyleSheet} from 'react-native';
import {Colors, screenHeight} from 'theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },

  detailsContainer: {
    position: 'absolute',
    bottom: 80,
    width: '90%',
    backgroundColor: Colors.transparentlightBg,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
  },
  detailCategory:{
    textTransform:'uppercase',
    color: Colors.darkGrey,
    paddingVertical:12
  },
  detailName: {
    fontSize: 24,
    marginBottom: 10,
  },
  detailInfo: {
    fontSize: 15,
    marginBottom: 8,
    textTransform:'capitalize'
  },
  rating:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center'
  },
  ratingText:{
    fontWeight:'500',
    paddingLeft:8
  },
  detailPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical:12
  },
  detailBottom: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    marginTop:8,
  },
  button: {
    backgroundColor: Colors.transparentlightBg,
    borderWidth:1/4,
    borderColor:Colors.buttonBgdark,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginRight:12,
    borderRadius: 12,
  },
  buttonText: {
    color: Colors.buttonBgdark,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default styles;
