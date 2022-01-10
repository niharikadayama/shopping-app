import {StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  HeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  inputField: {
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.transparentlightBg,
    width: 350,
    padding: 15,
    marginVertical: 10,
    backgroundColor: Colors.transparentlightBg,
  },
  inputFieldIcon: {
    color: Colors.mediumGrey,
    paddingRight: 10,
  },
  errorStyle: {
    color: Colors.red,
    alignSelf: 'stretch',
  },
  BottomContainer: {
    paddingHorizontal: 15,
    marginVertical: 10,
    height: 150,
    justifyContent: 'space-around',
  },
  BottomContainerIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  OtherLoginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.transparentlightBg,
    paddingHorizontal: 19,
    paddingVertical: 10,
  },
  icon: {
    fontSize: 26,
    paddingHorizontal: 10,
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
    paddingHorizontal: 5,
  },
  BottomContainerQuestionLocation: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.darkCoral,
  },
});

export default styles;
