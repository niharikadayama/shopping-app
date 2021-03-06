import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'theme';

interface IAddress {
  name: string;
  flatNo: any;
  locality: string;
  city: string;
  state: string;
  pincode: number;
  phoneNumber: number;
  onPressEdit?: () => void;
  onPressDelete?: () => void;
}

const AddressCard = (props: IAddress) => {
  const {
    name,
    flatNo,
    locality,
    city,
    state,
    pincode,
    phoneNumber,
    onPressDelete,
    onPressEdit,
  } = props;
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Text style={[styles.name, {color: colors.text}]}>{name}</Text>
      <Text style={[styles.address, {color: colors.text}]}>
        {flatNo}, {locality}, {city}
      </Text>
      <Text style={[styles.address, {color: colors.text}]}>
        {state} - {pincode}
      </Text>
      <Text style={[styles.contact, {color: colors.text}]}>
        Phone:{' '}
        <Text style={[styles.contactNo, {color: colors.text}]}>
          {phoneNumber}
        </Text>
      </Text>
      <View style={styles.horizontalLine} />
      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={onPressEdit}>
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressDelete}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    alignSelf: 'center',
    width: '89%',
    flex: 1,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 10,
    marginTop: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
    paddingVertical: 8,
  },
  address: {
    fontSize: 16,
    color: Colors.darkGrey,
  },
  contact: {
    fontSize: 18,
    paddingVertical: 8,
    color: Colors.darkGrey,
  },
  contactNo: {
    fontSize: 16,
    fontWeight: '600',
  },
  horizontalLine: {
    borderBottomColor: Colors.mediumGrey,
    borderBottomWidth: 1,
    paddingTop: 4,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  edit: {
    fontSize: 16,
    color: Colors.dullGreen,
  },
  delete: {
    fontSize: 16,
    color: Colors.red,
    paddingLeft: 28,
  },
});

export default AddressCard;
