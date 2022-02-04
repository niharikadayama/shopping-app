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
    bottom: 2,
    width: '90%',
    backgroundColor: Colors.transparentlightBg,
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
  },
  detailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  detailPrice: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  detailHeart: {
    position: 'absolute',
    top: 26,
    right: 20,
    color: Colors.red,
  },
  detailNormal: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  detailColor: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  detailSize: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 6,
    borderWidth: 1,
    borderColor: Colors.overlay,
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 4,
    marginLeft: '13%',
  },
  selectedDetailSize: {
    borderColor: Colors.darkGrey,
  },
  detailBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 14,
  },
});

export default styles;
