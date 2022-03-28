import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Colors} from 'theme';

interface button {
  name: string;
  theme: string;
  onPress?: () => void;
}
const Button = (props: button) => {
  const {name, theme, onPress} = props;
  return (
    <TouchableOpacity
      style={
        theme === 'primary'
          ? styles.primaryButton
          : theme === 'secondary'
          ? styles.secondaryButton
          : styles.tertiaryButton
      }
      onPress={onPress}>
      <Text
        style={
          theme === 'primary'
            ? styles.primaryButtonText
            : theme === 'secondary'
            ? styles.secondaryButtonText
            : styles.tertiaryButtonText
        }>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: Colors.buttonBglight,
    marginVertical: 16,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 130,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: Colors.buttonBgdark,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  secondaryButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  tertiaryButton: {
    backgroundColor: Colors.offwhite,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginRight: 6,
    borderRadius: 12,
  },
  tertiaryButtonText: {
    color: Colors.buttonBgdark,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Button;
