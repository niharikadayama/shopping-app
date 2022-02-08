import React from 'react';
import {View, Text, Image} from 'react-native';
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

  return (
    <View style={styles.container}>
      <View style={styles.headerSection}>
        <Icon
          name={leftIcon}
          size={iconSize}
          style={styles.iconLeft}
          onPress={onLeftIconPress}
        />

        {showLogo ? (
          <Image source={Images.logo} style={styles.logo} />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}

        <Icon
          name={rightIcon}
          size={iconSize}
          style={styles.iconRight}
          onPress={onRightIconPress}
        />
      </View>
    </View>
  );
};
export default Header;
