import React from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SelectedCategory = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.buttons}
      onPress={() => RootNavigation.navigate('details', item)}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Explore</Text>
        <Icon name="ios-chevron-forward" size={25} style={styles.sectionIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default SelectedCategory;
