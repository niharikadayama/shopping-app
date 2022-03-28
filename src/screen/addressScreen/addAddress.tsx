import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Header} from 'components';
import Form from './addressForm';

const AddAddress = ({navigation}) => {
  return (
    <View style={Styles.container}>
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
      <Form navigation={navigation} />
    </View>
  );
};

export default AddAddress;

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
