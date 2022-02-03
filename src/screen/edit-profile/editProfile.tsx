import React from 'react';
import {View, Text, TextInput,TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Header from 'components/header';
import ProfileInfo from './profileInfo';
import {Images} from 'theme';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      
      <Header leftIcon={"close"} rightIcon={"ios-checkmark"} size={25}
                onLeftIconPress ={()=>{ navigation.navigate('profile') }}
                onRightIconPress ={()=>{ navigation.navigate('profile') }}
                image= {false} heading={'Edit Profile'}
      />
     
      <View style={styles.profileSection}>
            <Image source={Images.profile} style={styles.profile} />
            <Text style={styles.profileText}>Change profile photo</Text>
      </View>

      <ProfileInfo 
          name='Anshuman Singh' 
          username={"anshSingh001"}
          email={'anshumanSingh@gmail.com'}
          phone={7777889934}
          gender={'Male'}
          date={'Oct 13, 1999'}
      />
      
    </View>
  );
};

export default EditProfile;
