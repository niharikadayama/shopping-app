import React from 'react';
import {View, Text, TextInput,TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Images} from 'theme';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
            <Icon name="close" size={25}/>
            <Text style={styles.header}>Edit Profile</Text>
            <Icon name="ios-checkmark" size={25} style={styles.headerIcon}/>
      </View>
      <View style={styles.profileSection}>
            <Image source={Images.profile} style={styles.profile} />
            <Text style={styles.profileText}>Change profile photo</Text>
      </View>
      <View style={styles.informationSection}>
            <Text style={styles.informationLabel}>Name</Text>
            <TextInput style={styles.informationInput}>Anshuman Singh</TextInput>
            <View style={styles.horizontalLine}/>
            <Text style={styles.informationLabel}>username</Text>
            <TextInput style={styles.informationInput}>anshSingh001</TextInput>
            <View style={styles.horizontalLine}/>
            <Text style={styles.informationLabel}>Email</Text>
            <TextInput style={styles.informationInput}>anshumanSingh@gmail.com</TextInput>
            <View style={styles.horizontalLine}/>
            <Text style={styles.informationLabel}>Phone number</Text>
            <TextInput style={styles.informationInput}>7777889934</TextInput>
            <View style={styles.horizontalLine}/>
            <Text style={styles.informationLabel}>Gender</Text>
            <TextInput style={styles.informationInput}>Male</TextInput>
            <View style={styles.horizontalLine}/>
            <Text style={styles.informationLabel}>Birthday</Text>
            <TextInput style={styles.informationInput}>Oct 13, 1999</TextInput>
            <View style={styles.horizontalLine}/>
      </View>
    </View>
  );
};

export default EditProfile;
