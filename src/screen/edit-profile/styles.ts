import {StyleSheet} from 'react-native';
import {Colors, screenHeight} from 'theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: screenHeight,
    backgroundColor: Colors.white,
  },
  headerSection: {
    marginTop: 50,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 20,
  },
  headerIcon: {
    color:Colors.blue
  },
  profileSection: {
    marginVertical: 16,
  },
  profile: {
    height: 140,
    width: 140,
    borderRadius: 140 / 2,
    alignSelf: 'center',
  },
  profileText: {
    fontSize: 17,
    alignSelf: 'center',
    marginVertical: 8,
    color:Colors.blue
  },
  informationSection: {
    paddingHorizontal:8,
  },
  informationLabel: {
    color:Colors.mediumGrey,
    paddingVertical:12,
    fontSize:16
  },
  informationInput: {
    fontSize:17,
    paddingHorizontal:8
  },
  horizontalLine: {
    borderBottomColor: Colors.mediumGrey,
    borderBottomWidth: 1,
    paddingTop:4,
  },
});

export default styles;
