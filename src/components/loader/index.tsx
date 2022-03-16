import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from 'theme/colors';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.darkCoral} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
