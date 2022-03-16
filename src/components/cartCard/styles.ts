import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  cartCard: {
    height: 180,
    backgroundColor: Colors.white,
    marginVertical: 12,
    marginHorizontal: 12,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    flexDirection:'row',
  },
  imageColumn:{
    
  },
  detailColumn:{
    justifyContent:'space-evenly',
    flexShrink:1,
  },
  cardImg: {
    width: 140,
    height: '100%',
    borderRadius:15,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  cardText: {
    paddingLeft: 20,
    paddingVertical: 12,
  },
  cardTitle: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardInfo: {
    fontSize: 16,
    paddingVertical: 6,
  },
  removeButton: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  RemoveButtonIcon: {
    color: Colors.darkRed,
  },
  RemoveButtonText:{
    paddingLeft: 6,
    fontSize: 18,
    color:Colors.darkGrey,
  },
  quant: {
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent:'flex-start',
  },
  quantText: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal:12
  },
  quantRupeeIcon: {
    color: Colors.darkGrey,
  },
  Price: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 4,
  },
  priceStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default styles;
