import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {Products} from 'components';
import {materials} from 'constant';
import {Header} from 'components';
import styles from './styles';

const Details = ({navigation, route}) => {
  const item = route.params;

  return (
    <View style={styles.container}>
      <Header
        leftIcon={'ios-chevron-back'}
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
