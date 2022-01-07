import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Controller} from 'react-hook-form';
import Icon from 'react-native-vector-icons/Ionicons';
import {images, colors} from 'theme';
import styles from './styles';

const AuthHeader = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={images.logo} />
    </View>
  );
};

interface Iauth {
  onPress?: () => void;
  buttonName?: string;
  location?: string;
  question?: string;
  placeholder?: string;
  control?: any;
  rules?: any;
  name?: any;
  icon?: any;
  secureTextEntry?: boolean;
}

const AuthInputContainer = (props: Iauth) => {
  const {control, name, placeholder, icon,secureTextEntry, rules = {}} = props;
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
              {borderColor: error ? colors.red : colors.transparentlightBg},
            ]}>
            <Icon name={icon} size={20} style={styles.inputFieldIcon}/>
            <TextInput
              value={value}
              onChangeText={onChange}
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

const AuthButton = (props: Iauth) => {
  const {onPress, buttonName} = props;
  return (
    <TouchableOpacity style={styles.loginButton} onPress={onPress}>
      <Text style={styles.loginButtonText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

const AuthBottomCard = (props: Iauth) => {
  const {question, location, onPress} = props;
  return (
    <View style={styles.BottomContainer}>
      <View style={styles.Container1}>
        <Icon name="logo-google" style={[styles.iconn,styles.googleIcon]} />
        <Icon name="logo-facebook" style={[styles.iconn,styles.facebookIcon]} />
        <Icon name="logo-twitter" style={[styles.iconn,styles.twitterIcon]}/>
        <Icon name="ios-logo-google-playstore" style={[styles.iconn,styles.playStoreIcon]}/>
        <Icon name="ios-logo-apple" style={[styles.iconn,styles.appleIcon]}/>
      </View>

      <View style={styles.Container2}>
        <Text style={styles.Container2Text1}>{question}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.Container2Text2}>{location}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {AuthBottomCard, AuthHeader, AuthInputContainer, AuthButton};
