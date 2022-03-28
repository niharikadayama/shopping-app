import {StyleSheet} from 'react-native';
import {Colors, screenWidth, screenHeight} from 'theme';

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: Colors.white,
  },
  inputContainer: {
    alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 16,
  },
  inputTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
  },
  forgetpassword: {
    textAlign: 'right',
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
  },
});

export default styles;
