import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';

interface CustomSetting {
  onPress: () => void;
  optionIconName: string;
  optionIconSize: number;
  OptionIconColor: any;
  title: string;
  rightIconName: string;
  rightIconSize: number;
}

const CustomSettingOption = (props: CustomSetting) => {
  const {
    onPress,
    optionIconName,
    optionIconSize,
    OptionIconColor,
    title,
    rightIconName,
    rightIconSize,
  } = props;

  const {colors} = useTheme();

  return (
    <TouchableOpacity
      style={[styles.sectionBody, {backgroundColor: colors.card}]}
      onPress={onPress}>
      <View style={styles.body}>
        <Icon
          name={optionIconName}
          size={optionIconSize}
          color={OptionIconColor}
        />
        <Text style={[styles.sectionText, {color: colors.text}]}>{title}</Text>
      </View>
      <Icon
        name={rightIconName}
        size={rightIconSize}
        style={styles.sectionIcon}
      />
    </TouchableOpacity>
  );
};

const CustomSettingOptionWithSwitch = (props: CustomSetting) => {
  const [darkMode, setDarkMode] = useState(false);
  const {optionIconName, optionIconSize, OptionIconColor, title} = props;

  const {colors} = useTheme();
  return (
    <View style={[styles.sectionBody, {backgroundColor: colors.card}]}>
      <View style={styles.body}>
        <Icon
          name={optionIconName}
          size={optionIconSize}
          color={OptionIconColor}
        />
        <Text style={[styles.sectionText, {color: colors.text}]}>{title}</Text>
      </View>
      <Switch
        value={darkMode}
        onValueChange={val => {
          setDarkMode(val);
        }}
      />
    </View>
  );
};

export {CustomSettingOption, CustomSettingOptionWithSwitch};
