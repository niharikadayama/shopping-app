import {StyleSheet} from 'react-native';
import {Colors, screenWidth} from 'theme';

const width = screenWidth / 2 - 30;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: 12,
  },
  subContainer: {
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: Colors.lightGrey,
    borderColor: Colors.lightGrey,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  textStyling: {
    color: Colors.mediumGrey,
    fontSize: 16,
  },
  card: {
    height: '89%',
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
    paddingHorizontal: 8,
    marginVertical: 4,
    width: 160,
    height: 160,
    borderRadius: 6,
    alignSelf: 'center',
  },
  cardText: {
    color: Colors.darkGrey,
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 4,
  },
  cardPrice: {
    color: Colors.darkGrey,
    fontSize: 17,
    paddingVertical: 4,
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
    padding: 6,
  },
});

export default styles;
