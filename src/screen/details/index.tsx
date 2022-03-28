import React from 'react';
import * as RootNavigation from '../../services/navigationServices';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Products} from 'components';
import {Header} from 'components';
import styles from './styles';

const Details = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Header
        leftIcon={'chevron-back'}
        rightIcon={'cart'}
        iconSize={28}
        onLeftIconPress={() => {
          RootNavigation.navigate('root');
        }}
        onRightIconPress={() => {
          RootNavigation.navigate('cart');
        }}
        showLogo={true}
        title={'Details'}
      />
      <Products />
    </View>
  );
};

export default Details;
