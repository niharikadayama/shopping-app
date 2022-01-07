import {StyleSheet} from 'react-native';
import {colors, screenWidth} from 'theme';

const width = screenWidth / 2 - 30;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginVertical: 20,
    backgroundColor: colors.white,
  },

  card: {
    height: '90%',
    backgroundColor: colors.lightGrey,
    width,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingHorizontal: 5,
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
    borderRadius: 5,
    alignSelf: 'center',
  },
  cardText: {
    color: colors.darkGrey,
    fontSize: 17,
    fontWeight: 'bold',
    paddingVertical: 5,
  },
  cardPrice: {
    color: colors.darkbg,
    fontSize: 18,
    paddingVertical: 5,
  },
  icon: {
    color: colors.offwhite,
    position: 'absolute',
    bottom: 26,
    right: 19,
  },
  cardBottom: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 8,
  },
});

export default styles;
