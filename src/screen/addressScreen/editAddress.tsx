import React from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import {Button, Header} from 'components';
import {useTheme} from '@react-navigation/native';
import {Colors} from 'theme';

const EditAddress = ({route}) => {
  const item = route.params?.item;
  const {colors} = useTheme();
  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.card}]}>
      <Header
        leftIcon={'chevron-back'}
        rightIcon={'close'}
        iconSize={28}
        onLeftIconPress={() => {
          RootNavigation.pop();
        }}
        showLogo={false}
        title={'Your Address'}
      />
      <View style={styles.informationSection}>
        <Text style={[styles.informationLabel, {color: colors.primary}]}>
          Name
        </Text>
        <TextInput
          style={[styles.informationInput, {color: colors.text}]}
          value={item.fullName}
        />

        <View style={styles.horizontalLine} />

        <Text style={[styles.informationLabel, {color: colors.primary}]}>
          Phone number
        </Text>
        <TextInput style={[styles.informationInput, {color: colors.text}]}>
          {item.phoneNumber}
        </TextInput>

        <View style={styles.horizontalLine} />

        <Text style={[styles.informationLabel, {color: colors.primary}]}>
          Pincode
        </Text>
        <TextInput style={[styles.informationInput, {color: colors.text}]}>
          {item.pincode}
        </TextInput>

        <View style={styles.horizontalLine} />

        <Text style={[styles.informationLabel, {color: colors.primary}]}>
          City
        </Text>
        <TextInput style={[styles.informationInput, {color: colors.text}]}>
          {item.city}
        </TextInput>

        <View style={styles.horizontalLine} />

        <Text style={[styles.informationLabel, {color: colors.primary}]}>
          State
        </Text>
        <TextInput style={[styles.informationInput, {color: colors.text}]}>
          {item.state}
        </TextInput>

        <View style={styles.horizontalLine} />

        <Text style={[styles.informationLabel, {color: colors.primary}]}>
          Locality/Area
        </Text>
        <TextInput style={[styles.informationInput, {color: colors.text}]}>
          {item.locality}
        </TextInput>

        <View style={styles.horizontalLine} />

        <Text style={[styles.informationLabel, {color: colors.primary}]}>
          Flat no/ Building name
        </Text>
        <TextInput style={[styles.informationInput, {color: colors.text}]}>
          {item.flatNo}
        </TextInput>

        <View style={styles.horizontalLine} />
      </View>
      <Button
        name="Save Address"
        theme="secondary"
        onPress={() => {
          RootNavigation.navigate('address');
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 4,
  },
  informationSection: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  informationLabel: {
    color: Colors.mediumGrey,
    paddingVertical: 8,
    fontSize: 16,
  },
  informationInput: {
    color: Colors.darkGrey,
    fontSize: 17,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  horizontalLine: {
    borderBottomColor: Colors.mediumGrey,
    borderBottomWidth: 1,
  },
});

export default EditAddress;
