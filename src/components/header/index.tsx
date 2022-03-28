import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {Images} from 'theme';

interface Iheader {
  leftIcon: string;
  rightIcon: string;
  title?: string;
  iconSize?: number;
  showLogo?: boolean;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
}
const Header = (props: Iheader) => {
  const {
    leftIcon,
    rightIcon,
    title,
    iconSize,
    onLeftIconPress,
    onRightIconPress,
    showLogo,
  } = props;

  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <View style={styles.headerSection}>
        <Icon
          name={leftIcon}
          size={iconSize}
          style={[styles.iconLeft, {color: colors.text}]}
          onPress={onLeftIconPress}
        />

        {showLogo ? (
          <Image source={Images.logo} style={styles.logo} />
        ) : (
          <Text style={[styles.title, {color: colors.text}]}>{title}</Text>
        )}

        <Icon
          name={rightIcon}
          size={iconSize}
          style={[styles.iconRight, {color: colors.text}]}
          onPress={onRightIconPress}
        />
      </View>
    </View>
  );
};
export default Header;
