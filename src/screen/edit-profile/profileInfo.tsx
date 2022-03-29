import React from 'react';
import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';
import {Colors} from 'theme';

interface Information {
  name: string;
  username?: any;
  email?: any;
  phone: number;
  gender: string;
  date?: any;
}

const ProfileInfo = (props: Information) => {
  const {name, username, email, phone, gender, date} = props;
  return (
    <View style={styles.informationSection}>
      <Text style={styles.informationLabel}>Name</Text>
      <TextInput style={styles.informationInput}>{name}</TextInput>
      <View style={styles.horizontalLine} />
      <Text style={styles.informationLabel}>username</Text>
      <TextInput style={styles.informationInput}>{username}</TextInput>
      <View style={styles.horizontalLine} />
      <Text style={styles.informationLabel}>Email</Text>
      <TextInput style={styles.informationInput}>{email}</TextInput>
      <View style={styles.horizontalLine} />
      <Text style={styles.informationLabel}>Phone number</Text>
      <TextInput style={styles.informationInput}>{phone}</TextInput>
      <View style={styles.horizontalLine} />
      <Text style={styles.informationLabel}>Gender</Text>
      <TextInput style={styles.informationInput}>{gender}</TextInput>
      <View style={styles.horizontalLine} />
      <Text style={styles.informationLabel}>Birthday</Text>
      <TextInput style={styles.informationInput}>{date}</TextInput>
      <View style={styles.horizontalLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  informationSection: {
    paddingHorizontal: Platform.OS === 'ios' ? 12 : 20,
  },
  informationLabel: {
    color: Colors.mediumGrey,
    paddingTop: 12,
    fontSize: 16,
  },
  informationInput: {
    fontSize: 17,
    paddingHorizontal: 8,
    paddingVertical: Platform.OS === 'ios' ? 4 : 2,
  },
  horizontalLine: {
    borderBottomColor: Colors.mediumGrey,
    borderBottomWidth: 1,
    paddingTop: Platform.OS === 'ios' ? 4 : 1,
  },
});

export default ProfileInfo;
