import React from 'react';
import Form from './form';
import {View} from 'react-native';
import styles from './styles';

class Feedback extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Form />
      </View>
    );
  }
}

export default Feedback;
