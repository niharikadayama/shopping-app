import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SelectedCategory = ({item, navigation}) => {
  return (
    <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('details', item)}
    >
        <View style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
            <Icon name="ios-chevron-forward" size={25} style={styles.sectionIcon} />
        </View>
    </TouchableOpacity>
  );
};

export default SelectedCategory;
