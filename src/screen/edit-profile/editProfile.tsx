import React from 'react';
import * as RootNavigation from '../../services/navigationServices';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import Header from 'components/header';
import ProfileInfo from './profileInfo';
import {Images} from 'theme';

const EditProfile = () => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={'close'}
        rightIcon={'checkmark'}
        iconSize={25}
        onLeftIconPress={() => {
          RootNavigation.navigate('profile');
        }}
        onRightIconPress={() => {
          RootNavigation.navigate('profile');
        }}
        showLogo={false}
        title={'Edit Profile'}
      />

      <View style={styles.profileSection}>
        <Image source={Images.profile} style={styles.profile} />
        <Text style={styles.profileText}>Change profile photo</Text>
      </View>

      <ProfileInfo
        name="Anshuman Singh"
        username={'anshSingh001'}
        email={'anshumanSingh@gmail.com'}
        phone={7777889934}
        gender={'Male'}
        date={'Oct 13, 1999'}
      />
    </View>
  );
};

export default EditProfile;
