import React from 'react';
import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import {Button, Header} from 'components';
import {Colors} from 'theme';

const EditAddress = ({navigation, route}) => {
  const item = route.params?.item;
  return (
    <ScrollView style={styles.container}>
      <Header
        leftIcon={'chevron-back'}
        rightIcon={'close'}
        iconSize={28}
        onLeftIconPress={() => {
          navigation.navigate('address');
        }}
        showLogo={false}
        title={'Your Address'}
      />
      <View style={styles.informationSection}>
        <Text style={styles.informationLabel}>Name</Text>
        <TextInput style={styles.informationInput} value={item.fullName} />

        <View style={styles.horizontalLine} />

        <Text style={styles.informationLabel}>Phone number</Text>
        <TextInput style={styles.informationInput}>
          {item.phoneNumber}
        </TextInput>

        <View style={styles.horizontalLine} />

        <Text style={styles.informationLabel}>Pincode</Text>
        <TextInput style={styles.informationInput}>{item.pincode}</TextInput>

        <View style={styles.horizontalLine} />

        <Text style={styles.informationLabel}>City</Text>
        <TextInput style={styles.informationInput}>{item.city}</TextInput>

        <View style={styles.horizontalLine} />

        <Text style={styles.informationLabel}>State</Text>
        <TextInput style={styles.informationInput}>{item.state}</TextInput>

        <View style={styles.horizontalLine} />

        <Text style={styles.informationLabel}>Locality/Area</Text>
        <TextInput style={styles.informationInput}>{item.locality}</TextInput>

        <View style={styles.horizontalLine} />

        <Text style={styles.informationLabel}>Flat no/ Building name</Text>
        <TextInput style={styles.informationInput}>{item.flatNo}</TextInput>

        <View style={styles.horizontalLine} />
      </View>
      <Button
        name="Save Address"
        theme="secondary"
        onPress={() => {
          navigation.navigate('address');
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  informationSection: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  informationLabel: {
    color: Colors.mediumGrey,
    paddingVertical: 8,
    fontSize: 16,
  },
  informationInput: {
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
