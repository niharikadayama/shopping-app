import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme} from '@react-navigation/native';
import {Images, Colors} from 'theme';
import styles from './styles';

const AuthHeader = () => {
  const {colors} = useTheme();
  return (
    <View style={[styles.headerContainer, {backgroundColor: colors.card}]}>
      <Image source={Images.appLogo} style={styles.logostyle} />
    </View>
  );
};

interface Authentication {
  onPress?: () => void;
  placeholder?: string;
  control?: any;
  rules?: any;
  name?: any;
  icon?: any;
  secureTextEntry?: boolean;
}
interface BottomCard {
  onPress?: () => void;
  location?: string;
  question?: string;
}

const AuthInputContainer = (props: Authentication) => {
  const {control, name, placeholder, icon, secureTextEntry, rules = {}} = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.inputField,
              {borderColor: error ? Colors.red : Colors.transparentlightBg},
            ]}>
            <Icon name={icon} size={22} style={styles.inputFieldIcon} />
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              style={styles.textInputFont}
            />
          </View>
          {error && (
            <Text style={styles.errorStyle}>{error.message || 'Error'}</Text>
          )}
        </>
      )}
    />
  );
};

const AuthBottomCard = (props: BottomCard) => {
  const {colors} = useTheme();
  const {question, location, onPress} = props;
  return (
    <View style={[styles.BottomContainer, {backgroundColor: colors.card}]}>
      <View style={styles.bottomContainerIcon}>
        <Icon name="logo-google" style={[styles.icon, styles.googleIcon]} />
        <Icon name="logo-facebook" style={[styles.icon, styles.facebookIcon]} />
        <Icon name="logo-twitter" style={[styles.icon, styles.twitterIcon]} />
        <Icon name="ios-logo-apple" style={[styles.icon, styles.appleIcon]} />
      </View>

      <View style={styles.BottomContainerQuestion}>
        <Text
          style={[styles.BottomContainerQuestionText, {color: colors.text}]}>
          {question}
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.BottomContainerQuestionLocation}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {AuthBottomCard, AuthHeader, AuthInputContainer};
