import {Platform, StyleSheet} from 'react-native';
import {Colors, screenHeight} from 'theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
    backgroundColor: Colors.white,
  },
  headerSection: {
    paddingTop: 16,
  },
  header: {
    marginTop: 60,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerHeading: {
    fontSize: 20,
    fontWeight: '600',
    paddingHorizontal: 120,
  },
  profile: {
    width: 160,
    height: 160,
    borderRadius: 160 / 2,
    alignSelf: 'center',
  },
  profileName: {
    fontSize: 20,
    fontWeight: '600',
    alignSelf: 'center',
    marginVertical: Platform.OS === 'ios' ? 16 : 8,
  },
  section: {
    marginTop: Platform.OS === 'ios' ? 16 : 4,
    marginHorizontal: 20,
    backgroundColor: Colors.lightGrey,
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
    marginVertical: Platform.OS === 'ios' ? 16 : 10,
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
});

export default styles;
