import React from 'react';
import {View} from 'react-native';
import Category from 'components/list';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Category navigation={navigation} />
    </View>
  );
};

export default HomeScreen;
