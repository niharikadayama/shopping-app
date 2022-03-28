import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Images, screenHeight, screenWidth} from 'theme';

const LinkNotFound = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.linkError} style={styles.imageStyle} />
      <Text style={styles.textStyle}>Something Went Wrong</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenHeight,
  },
  imageStyle: {
    width: 200,
    height: 200,
  },
  textStyle: {},
});

export default LinkNotFound;
