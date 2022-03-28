import {StyleSheet} from 'react-native';
import {Colors, screenHeight, screenWidth} from 'theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayStyle: {
    backgroundColor: Colors.overlay,
  },
  subContainer: {
    width: screenWidth,
    height: screenHeight,
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
  },
  headers: {
    position: 'absolute',
    top: 100,
    width: screenWidth,
  },
  tabs: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  headerBody: {
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  },
  indicatorStyle: {
    position: 'absolute',
    height: 4,
    width: 70,
    left: 30,
    backgroundColor: Colors.white,
    bottom: -10,
  },
});
export default styles;
