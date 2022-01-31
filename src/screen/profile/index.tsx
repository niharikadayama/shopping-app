import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Images} from 'theme';

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
     <View style={styles.headerSection}>
     <View style={styles.header}>
        <Icon name="ios-chevron-back" size={22} />
        <Text style={styles.headerHeading}>Profile</Text>
      </View>
      <Image
        source={Images.profile}
        style={styles.profile}
      />
      <Text style={styles.profileName}>Anshuman Singh</Text>
     </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.sectionBody}
             onPress={navigation.navigate('EditProfile')}
        >
          <View style={styles.body}>
            <Icon name="person" size={26} color={Colors.mediumGrey} />
            <Text style={styles.sectionText}>Edit Profile</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionBody}
             onPress={navigation.navigate('EditProfile')}
        >
          <View style={styles.body}>
            <Icon name="location-sharp" size={29} color={Colors.mediumGrey} />
            <Text style={styles.sectionText}>Shopping Address</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionBody}
             onPress={navigation.navigate('EditProfile')}
        >
          <View style={styles.body}>
            <Icon name="heart-sharp" size={29} color={Colors.mediumGrey} />
            <Text style={styles.sectionText}>Wishlist</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionBody}
             onPress={navigation.navigate('EditProfile')}
        >
          <View style={styles.body}>
            <Icon
              name="ios-receipt-sharp"
              size={29}
              color={Colors.mediumGrey}
            />
            <Text style={styles.sectionText}>Order History</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionBody}
             onPress={navigation.navigate('EditProfile')}
        >
          <View style={styles.body}>
            <Icon name="notifications" size={29} color={Colors.mediumGrey} />
            <Text style={styles.sectionText}>Notification</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionBody}
             onPress={navigation.navigate('EditProfile')}
        >
          <View style={styles.body}>
            <Icon name="ios-card" size={29} color={Colors.mediumGrey} />
            <Text style={styles.sectionText}>Cards</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;
