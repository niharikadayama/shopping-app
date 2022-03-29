import React from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, StyleSheet} from 'react-native';
import {Header} from 'components';
import {useTheme} from '@react-navigation/native';
import Form from './addressForm';

const AddAddress = () => {
  const {colors} = useTheme();
  return (
    <View style={[Styles.container, {backgroundColor: colors.card}]}>
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
      <Form />
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
