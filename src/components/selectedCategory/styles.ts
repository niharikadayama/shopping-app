import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  buttons: {
    position: 'absolute',
    right: 110,
    bottom: 240,
    backgroundColor: Colors.transparentdarkBg,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  button: {
    flexDirection: 'row',
  },
  buttonText: {
    color: Colors.mediumGrey,
    fontWeight: '500',
    fontSize: 20,
  },
  sectionIcon: {
    color: Colors.mediumGrey,
    paddingLeft: 10,
  },
});

export default styles;
