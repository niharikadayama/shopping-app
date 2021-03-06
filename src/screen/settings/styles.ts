import {StyleSheet} from 'react-native';
import {Colors, screenHeight} from 'theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
  },
  header: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerHeading: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 120,
  },
  section: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: '500',
  },
  sectionBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  sectionIcon: {
    color: Colors.mediumGrey,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionText: {
    marginLeft: 12,
    fontSize: 18,
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
  },
});

export default styles;
