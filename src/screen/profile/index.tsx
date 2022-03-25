import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import styles from './styles';
import Header from 'components/header';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Images} from 'theme';

const Profile = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Header
        leftIcon={'ios-chevron-back'}
        rightIcon={''}
        iconSize={25}
        onLeftIconPress={() => {
          navigation.navigate('profile');
        }}
        onRightIconPress={() => {
          navigation.navigate('profile');
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
        <TouchableOpacity
          style={styles.sectionBody}
          onPress={() => {
            navigation.navigate('EditProfile');
          }}>
          <View style={styles.body}>
            <Icon name="person" size={26} color={Colors.mediumGrey} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Edit Profile
            </Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={[styles.sectionIcon, {color: colors.text}]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionBody}
          onPress={() => {
            navigation.navigate('address');
          }}>
          <View style={styles.body}>
            <Icon name="location-sharp" size={29} color={Colors.mediumGrey} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Shopping Address
            </Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={[styles.sectionIcon, {color: colors.text}]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionBody}
          onPress={() => {
            navigation.navigate('wishlist');
          }}>
          <View style={styles.body}>
            <Icon name="heart-sharp" size={29} color={Colors.mediumGrey} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Wishlist
            </Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={[styles.sectionIcon, {color: colors.text}]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionBody}
          onPress={() => {
            navigation.navigate('root');
          }}>
          <View style={styles.body}>
            <Icon
              name="ios-receipt-sharp"
              size={29}
              color={Colors.mediumGrey}
            />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Order History
            </Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={[styles.sectionIcon, {color: colors.text}]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionBody}
          onPress={() => {
            navigation.navigate('root');
          }}>
          <View style={styles.body}>
            <Icon name="notifications" size={29} color={Colors.mediumGrey} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Notification
            </Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={[styles.sectionIcon, {color: colors.text}]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sectionBody}
          onPress={() => {
            navigation.navigate('root');
          }}>
          <View style={styles.body}>
            <Icon name="ios-card" size={29} color={Colors.mediumGrey} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Cards
            </Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={[styles.sectionIcon, {color: colors.text}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
