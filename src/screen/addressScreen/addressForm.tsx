import React from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import {Button} from 'components';
import {useForm} from 'react-hook-form';
import {useTheme} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToAddress} from 'redux/address/action';
import {AuthInputContainer} from 'components/auth';

const Form = () => {
  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const onSubmit = values => {
    RootNavigation.navigate('address');
    dispatch(addToAddress(values));
  };
  return (
    <ScrollView style={styles.root}>
      <View style={styles.subContainer}>
        <Text style={[styles.subContainerText, {color: colors.text}]}>
          Contact Info
        </Text>
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
          icon="call"
          secureTextEntry={false}
          rules={{required: 'phoneNumber is required'}}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={[styles.subContainerText, {color: colors.text}]}>
          Address Info
        </Text>
        <AuthInputContainer
          name="pincode"
          control={control}
          placeholder="Enter Pincode"
          icon="pin"
          secureTextEntry={false}
          rules={{required: 'pincode is required'}}
        />
        <AuthInputContainer
          name="city"
          control={control}
          placeholder="Enter City"
          icon="location"
          secureTextEntry={false}
          rules={{required: 'City is required'}}
        />
        <AuthInputContainer
          name="state"
          control={control}
          placeholder="Enter State"
          icon="location"
          secureTextEntry={false}
          rules={{required: 'State is required'}}
        />
        <AuthInputContainer
          name="locality"
          control={control}
          placeholder="Enter Locality/Area/Street"
          icon="location"
          secureTextEntry={false}
          rules={{required: 'locality is required'}}
        />
        <AuthInputContainer
          name="flatNo"
          control={control}
          placeholder="Enter flat No / Building Name"
          icon="home-outline"
          secureTextEntry={false}
          rules={{required: 'flatNo is required'}}
        />
        <Button
          name="Submit"
          theme="secondary"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 16,
  },
  subContainer: {
    paddingBottom: 8,
  },
  subContainerText: {
    fontSize: 17,
  },
  input: {
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
  },
});

export default Form;
