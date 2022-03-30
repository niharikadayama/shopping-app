import {Platform, StyleSheet} from 'react-native';
import {Colors} from 'theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 12,
    width: '100%',
    marginTop: Platform.OS === 'ios' ? 36 : 12,
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  logo: {
    width: 100,
    height: 100,
  },
  iconLeft: {
    color: Colors.darkGrey,
  },
  iconRight: {
    color: Colors.darkGrey,
  },
});

export default styles;
