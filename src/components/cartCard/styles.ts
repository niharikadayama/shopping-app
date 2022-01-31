import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  cartCard: {
    height: 175,
    backgroundColor: Colors.white,
    marginVertical: 15,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImg: {
    width: 140,
    height: '100%',
    //borderRadius:15,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  cardText: {
    paddingLeft: 20,
    paddingVertical: 10,
    flexShrink: 1,
  },
  cardTitle: {
    marginTop: 5,
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardInfo: {
    fontSize: 17,
    paddingVertical: 7,
  },
  removeButton: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  RemoveButtonIcon: {
    color: Colors.darkRed,
  },
  RemoveButtonText:{
    paddingLeft: 5,
    fontSize: 17,
    color:Colors.darkGrey,
  },
  quant: {
    flexDirection: 'row',
    paddingVertical: 15,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  quantText: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 5,
  },
  quantRupeeIcon: {
    color: Colors.darkGrey,
  },
  Price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 5,
  },
  priceStyle: {
    fontWeight: 'bold',
    fontSize: 17,
  }
});

export default styles;
