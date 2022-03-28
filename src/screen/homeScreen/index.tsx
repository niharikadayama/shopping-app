import React from 'react';
import {View} from 'react-native';
import Category from 'components/list';
import styles from './styles';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Category />
    </View>
  );
};

export default HomeScreen;
