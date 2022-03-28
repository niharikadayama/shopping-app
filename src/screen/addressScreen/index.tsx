import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeFromAddress} from 'redux/address/action';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from 'components/header';
import AddressCard from './addressCard';
import styles from './styles';

const AddressScreen = ({navigation, value}) => {
  const formState = useSelector(state => state.address.addressInfo);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header
        leftIcon={'chevron-back'}
        rightIcon={''}
        iconSize={28}
        onLeftIconPress={() => {
          navigation.navigate('profile');
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
              name={item.item.Fullname}
              flatNo={item.item.flatNo}
              locality={item.item.locality}
              city={item.item.city}
              state={item.item.state}
              pincode={item.item.pincode}
              phoneNumber={item.item.phoneNumber}
              onPressEdit={() => {
                navigation.navigate('EditAddress', item);
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
          navigation.navigate('addAddress');
        }}>
        <Icon name="ios-add" size={26} style={styles.addNewAddressIcon} />
        <Text style={styles.addNewAddressText}>Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressScreen;
