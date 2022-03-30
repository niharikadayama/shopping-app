import React from 'react';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setTheme} from 'redux/theme/action';
import {IRootState} from 'redux/store';
import styles from './styles';

interface CustomSetting {
  onPress?: () => void;
  optionIconName: string;
  optionIconSize: number;
  OptionIconColor: any;
  title: string;
  rightIconName: string;
  rightIconSize?: number;
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
  const {optionIconName, optionIconSize, OptionIconColor, title} = props;
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const theme = useSelector((state: IRootState) => state.theme.currentTheme);

  const handleThemeChange = () => {
    const nextTheme =
      theme === 'System' ? 'Light' : theme === 'Light' ? 'Dark' : 'System';
    dispatch(setTheme(nextTheme));
  };

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
      <Switch value={false} onValueChange={handleThemeChange} />
    </View>
  );
};

export {CustomSettingOption, CustomSettingOptionWithSwitch};
