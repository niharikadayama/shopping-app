import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Products} from 'components';
import {Header} from 'components';
import styles from './styles';

const Details = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Header
        leftIcon={'chevron-back'}
        rightIcon={'cart'}
        iconSize={28}
        onLeftIconPress={() => {
          navigation.navigate('root');
        }}
        onRightIconPress={() => {
          navigation.navigate('cart');
        }}
        showLogo={true}
        title={'Details'}
      />
      <Products navigation={navigation} />
    </View>
  );
};

export default Details;
