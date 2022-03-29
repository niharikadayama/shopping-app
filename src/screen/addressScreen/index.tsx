import React from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromAddress} from 'redux/address/action';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from 'components/header';
import AddressCard from './addressCard';
import styles from './styles';

const AddressScreen = () => {
  const formState = useSelector(state => state.address.addressInfo);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
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

      <Text style={styles.subContainerHeading}>All Address</Text>
      <FlatList
        data={formState}
        renderItem={item => {
          return (
            <AddressCard
              name={item.item.fullName}
              flatNo={item.item.flatNo}
              locality={item.item.locality}
              city={item.item.city}
              state={item.item.state}
              pincode={item.item.pincode}
              phoneNumber={item.item.phoneNumber}
              onPressEdit={() => {
                RootNavigation.navigate('EditAddress', item);
              }}
              onPressDelete={() => {
                dispatch(removeFromAddress(item.item.phoneNumber));
              }}
            />
          );
        }}
      />
      <TouchableOpacity
        style={styles.addNewAddress}
        onPress={() => {
          RootNavigation.navigate('addAddress');
        }}>
        <Icon name="ios-add" size={26} style={styles.addNewAddressIcon} />
        <Text style={styles.addNewAddressText}>Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressScreen;
