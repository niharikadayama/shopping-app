import React from 'react';
import * as RootNavigation from '../../services/navigationServices';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Button} from 'components';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {addToAddress} from 'redux/address/action';
import {AuthInputContainer} from 'components/auth';

let Form = () => {
  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();

  const onSubmit = values => {
    RootNavigation.navigate('address');
    dispatch(addToAddress(values));
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerText}>Contact Info</Text>
        <AuthInputContainer
          name="fullName"
          control={control}
          placeholder="Enter Full Name"
          icon="ios-mail"
          secureTextEntry={false}
          rules={{required: 'FullName is required'}}
        />
        <AuthInputContainer
          name="phoneNumber"
          control={control}
          placeholder="Enter Phone Number"
          icon="ios-mail"
          secureTextEntry={false}
          rules={{required: 'phoneNumber is required'}}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.subContainerText}>Address Info</Text>
        <AuthInputContainer
          name="pincode"
          control={control}
          placeholder="Enter Pincode"
          icon="ios-mail"
          secureTextEntry={false}
          rules={{required: 'pincode is required'}}
        />
        <AuthInputContainer
          name="city"
          control={control}
          placeholder="Enter City"
          icon="ios-mail"
          secureTextEntry={false}
          rules={{required: 'City is required'}}
        />
        <AuthInputContainer
          name="state"
          control={control}
          placeholder="Enter State"
          icon="ios-mail"
          secureTextEntry={false}
          rules={{required: 'State is required'}}
        />
        <AuthInputContainer
          name="locality"
          control={control}
          placeholder="Enter Locality/Area/Street"
          icon="ios-mail"
          secureTextEntry={false}
          rules={{required: 'locality is required'}}
        />
        <AuthInputContainer
          name="flatNo"
          control={control}
          placeholder="Enter flat No / Building Name"
          icon="ios-mail"
          secureTextEntry={false}
          rules={{required: 'flatNo is required'}}
        />
        <Button
          name="Submit"
          theme="tertiary"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {},
  subContainer: {},
  subContainerText: {},
  input: {
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
  },
});

export default Form;
