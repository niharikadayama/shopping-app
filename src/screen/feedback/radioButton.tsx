import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomRadioButton} from 'components';

const val = [
  {
    key: 'YES',
    text: 'YES',
  },
  {
    key: 'NO',
    text: 'NO',
  },
];

export default class RadioButtonComponenet extends Component {
  render() {
    return (
      <View style={styles.buttonWrapper}>
        <CustomRadioButton PROP={val} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'flex-start',
  },
});
