import React from 'react';
import * as RootNavigation from '../../services/navigationServices';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import Header from 'components/header';
import {Images} from 'theme';
import CustomProfileOption from './customProfileOption';

const Profile = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Header
        leftIcon={'ios-chevron-back'}
        rightIcon={'close'}
        iconSize={25}
        onLeftIconPress={() => {
          RootNavigation.navigate('profile');
        }}
        onRightIconPress={() => {
          RootNavigation.navigate('profile');
        }}
        showLogo={false}
        title={'Profile'}
      />
      <View style={styles.headerSection}>
        <Image source={Images.profile} style={styles.profile} />
        <Text style={[styles.profileName, {color: colors.text}]}>
          Anshuman Singh
        </Text>
      </View>

      <View style={[styles.section, {backgroundColor: colors.card}]}>
        <CustomProfileOption
          onPress={() => {
            RootNavigation.navigate('EditProfile');
          }}
          optionIconName={'person'}
          optionIconSize={26}
          title={'Edit Profile'}
          rightIconName={'ios-chevron-forward'}
          rightIconSize={25}
        />

        <CustomProfileOption
          onPress={() => {
            RootNavigation.navigate('address');
          }}
          optionIconName={'location-sharp'}
          optionIconSize={29}
          title={'Shopping Address'}
          rightIconName={'ios-chevron-forward'}
          rightIconSize={25}
        />

        <CustomProfileOption
          onPress={() => {
            RootNavigation.navigate('wishlist');
          }}
          optionIconName={'heart-sharp'}
          optionIconSize={29}
          title={'Wishlist'}
          rightIconName={'ios-chevron-forward'}
          rightIconSize={25}
        />

        <CustomProfileOption
          onPress={() => {
            RootNavigation.navigate('root');
          }}
          optionIconName={'receipt-sharp'}
          optionIconSize={29}
          title={'Order History'}
          rightIconName={'ios-chevron-forward'}
          rightIconSize={25}
        />

        <CustomProfileOption
          onPress={() => {
            RootNavigation.navigate('root');
          }}
          optionIconName={'notifications'}
          optionIconSize={29}
          title={'Notification'}
          rightIconName={'ios-chevron-forward'}
          rightIconSize={25}
        />

        <CustomProfileOption
          onPress={() => {
            RootNavigation.navigate('root');
          }}
          optionIconName={'card'}
          optionIconSize={29}
          title={'Cards'}
          rightIconName={'ios-chevron-forward'}
          rightIconSize={25}
        />
      </View>
    </View>
  );
};

export default Profile;
