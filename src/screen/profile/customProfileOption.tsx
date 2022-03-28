import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

interface CustomOptions {
  onPress?: () => void;
  optionIconName: string;
  optionIconSize?: number;
  title?: string;
  rightIconName: string;
  rightIconSize?: number;
}

const CustomProfileOption = (props: CustomOptions) => {
  const {
    onPress,
    optionIconName,
    optionIconSize,
    title,
    rightIconName,
    rightIconSize,
  } = props;

  const {colors} = useTheme();

  return (
    <TouchableOpacity style={styles.sectionBody} onPress={onPress}>
      <View style={styles.body}>
        <Icon
          name={optionIconName}
          size={optionIconSize}
          style={styles.sectionIcon}
        />
        <Text style={[styles.sectionText, {color: colors.text}]}>{title}</Text>
      </View>
      <Icon
        name={rightIconName}
        size={rightIconSize}
        style={[styles.sectionIcon, {color: colors.text}]}
      />
    </TouchableOpacity>
  );
};

export default CustomProfileOption;
