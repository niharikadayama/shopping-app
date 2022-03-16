import {StyleSheet} from 'react-native';
import {Colors, screenWidth, screenHeight} from 'theme';

const width = screenWidth / 2 - 30;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.white,
  },

  card: {
    height: '90%',
    backgroundColor: Colors.lightGrey,
    width,
    marginHorizontal: 6,
    marginVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginBottom: 20,
    padding: 0,
    flex: 1,
  },
  cardImg: {
    width: '100%',
    height: 190,
    borderRadius: 6,
    alignSelf: 'center',
  },
  cardText: {
    color: Colors.darkGrey,
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 6,
  },
  cardPrice: {
    color: Colors.darkbg,
    fontSize: 18,
    paddingVertical: 6,
  },
  icon: {
    color: Colors.offwhite,
    position: 'absolute',
    bottom: 26,
    right: 18,
  },
  cardBottom: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 8,
  },
});

export default styles;
