import React from 'react';
import {View} from 'react-native';
import * as RootNavigation from 'services/navigationServices';
import {Header} from 'components';
import Form from './form';
import styles from './styles';

class Feedback extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          leftIcon={'close'}
          rightIcon={'checkmark'}
          iconSize={25}
          onLeftIconPress={() => {
            RootNavigation.pop();
          }}
          onRightIconPress={() => {
            RootNavigation.navigate('profile');
          }}
          showLogo={false}
          title={'Feedback'}
        />
        <Form />
      </View>
    );
  }
}

export default Feedback;
