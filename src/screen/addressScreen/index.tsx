import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from 'components/header';
import AddressCard from './addressCard';
import styles from './styles';

const AddressScreen = ({navigation}) => {
  const formState = useSelector(state => state.form);

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
      <AddressCard
        name={formState.AddressInfo.values.name}
        flatNo={'A-02'}
        locality={formState.AddressInfo.values.locality}
        city={formState.AddressInfo.values.city}
        state={formState.AddressInfo.values.state}
        pincode={446601}
        phoneNumber={formState.AddressInfo.values.phoneNumber}
        typeTag="default"
        onPressEdit={() => {
          navigation.navigate('EditAddress');
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
