import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import {Images, Colors} from 'theme';
import styles from './styles';

const AuthHeader = () => {
  return (
    <View style={styles.HeaderContainer}>
      <Image source={Images.logo} />
    </View>
  );
};

interface Authentication {
  onPress?: () => void;
  onChangeText?: any;
  location?: string;
  question?: string;
  placeholder?: string;
  control?: any;
  rules?: any;
  name?: any;
  icon?: any;
  secureTextEntry?: boolean;
}

const AuthInputContainer = (props: Authentication) => {
  const {control, name,onChangeText ,placeholder, icon,secureTextEntry, rules = {}} = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[
              styles.inputField,
              {borderColor: error ? Colors.red : Colors.transparentlightBg},
            ]}>
            <Icon name={icon} size={20} style={styles.inputFieldIcon}/>
            <TextInput
              value={value}
              onChangeText={onChangeText}
              onBlur={onBlur}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
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

const AuthBottomCard = (props: Authentication) => {
  const {question, location, onPress} = props;
  return (
    <View style={styles.BottomContainer}>
      <View style={styles.BottomContainerIcon}>
        <Icon name="logo-google" style={[styles.icon,styles.googleIcon]} />
        <Icon name="logo-facebook" style={[styles.icon,styles.facebookIcon]} />
        <Icon name="logo-twitter" style={[styles.icon,styles.twitterIcon]}/>
        <Icon name="ios-logo-apple" style={[styles.icon,styles.appleIcon]}/>
      </View>

      <View style={styles.BottomContainerQuestion}>
        <Text style={styles.BottomContainerQuestionText}>{question}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.BottomContainerQuestionLocation}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {AuthBottomCard, AuthHeader, AuthInputContainer};
