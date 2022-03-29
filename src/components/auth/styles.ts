import {Platform, StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'ios' ? 50 : 10,
  },
  logostyle: {
    height: 130,
    width: 130,
  },
  inputField: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.transparentlightBg,
    width: 350,
    padding: 4,
    marginVertical: 8,
    backgroundColor: Colors.transparentlightBg,
  },
  inputFieldIcon: {
    color: Colors.mediumGrey,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textInputFont: {
    fontSize: 16,
    paddingVertical: 6,
  },
  errorStyle: {
    color: Colors.red,
    alignSelf: 'stretch',
  },
  BottomContainer: {
    paddingHorizontal: 16,
    height: 152,
    justifyContent: 'space-evenly',
    paddingBottom: 6,
  },
  bottomContainerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otherLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.transparentlightBg,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  icon: {
    fontSize: 26,
    paddingHorizontal: 12,
  },
  googleIcon: {
    color: Colors.googleColor,
  },
  facebookIcon: {
    color: Colors.facebookColor,
  },
  twitterIcon: {
    color: Colors.twitterColor,
  },
  appleIcon: {
    color: Colors.appleStore,
  },
  IconText: {
    fontSize: 18,
  },
  BottomContainerQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomContainerQuestionText: {
    fontSize: 16,
    paddingHorizontal: 6,
  },
  BottomContainerQuestionLocation: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.darkCoral,
  },
});

export default styles;
