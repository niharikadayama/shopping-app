import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from 'components/header';
import AddressCard from './addressCard';
import styles from './styles';

const AddressScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        leftIcon={'ios-chevron-back'}
        rightIcon={''}
        size={28}
        onLeftIconPress={() => {
          navigation.navigate('profile');
        }}
        image={false}
        heading={'Your Address'}
      />
      <Text style={styles.subContainerHeading}>Default Address</Text>
      <AddressCard 
            name='Anshuman Singh'
            flatNo={'B17'}
            locality='Shyam Nagar'
            city='Nagpur'
            state='Maharashtra'
            pincode={4430167}
            phoneNumber={7772245589}
            typeTag='default'
        />
      <Text style={styles.subContainerHeading}>All Address</Text>
      <AddressCard 
            name='Anushka Sharma'
            flatNo={'A17'}
            locality='Krishna Vihar'
            city='Amravati'
            state='Maharashtra'
            pincode={4430322}
            phoneNumber={7772245589}
            typeTag='others'
        />
        <TouchableOpacity style={styles.addNewAddress}>
              <Icon name="ios-add" size={26} style={styles.addNewAddressIcon}/>
              <Text style={styles.addNewAddressText}>Add New Address</Text>
          </TouchableOpacity>
    </View>
  );
};

export default AddressScreen;
