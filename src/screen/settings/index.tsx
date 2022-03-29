import React from 'react';
import * as RootNavigation from 'services/navigationServices';
import {View, Text} from 'react-native';
import {
  CustomSettingOption,
  CustomSettingOptionWithSwitch,
} from './customSettingOption';
import styles from './styles';
import Header from 'components/header';
import {Colors} from 'theme';
import {useTheme} from '@react-navigation/native';

const Settings = () => {
  let year = new Date().getFullYear();
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Header
        leftIcon={'chevron-back'}
        rightIcon={'close'}
        iconSize={25}
        onLeftIconPress={() => {
          RootNavigation.pop();
        }}
        onRightIconPress={() => {
          RootNavigation.navigate('profile');
        }}
        showLogo={false}
        title={'Settings'}
      />
      <View style={[styles.section, {backgroundColor: colors.card}]}>
        <Text style={[styles.sectionHeading, {color: colors.text}]}>
          Account
        </Text>
        <CustomSettingOption
          onPress={() => RootNavigation.navigate('profile')}
          optionIconName={'person-circle'}
          optionIconSize={35}
          OptionIconColor={Colors.darkCoral}
          title={'Anshuman Singh'}
          rightIconName={'chevron-forward'}
          rightIconSize={25}
        />
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionHeading, {color: colors.text}]}>
          Settings
        </Text>
        <CustomSettingOption
          onPress={() => RootNavigation.navigate('profile')}
          optionIconName={'globe'}
          optionIconSize={35}
          OptionIconColor={Colors.dullGreen}
          title={'Language'}
          rightIconName={'chevron-forward'}
          rightIconSize={25}
        />
        <CustomSettingOption
          onPress={() => RootNavigation.navigate('profile')}
          optionIconName={'notifications'}
          optionIconSize={29}
          OptionIconColor={Colors.blue}
          title={'Notifications'}
          rightIconName={'chevron-forward'}
          rightIconSize={25}
        />
        <CustomSettingOptionWithSwitch
          optionIconName={'moon'}
          optionIconSize={30}
          OptionIconColor={Colors.purple}
          title={'Dark Mode'}
        />
        <CustomSettingOption
          onPress={() => RootNavigation.navigate('profile')}
          optionIconName={'bug'}
          optionIconSize={29}
          OptionIconColor={Colors.red}
          title={'Report Issue'}
          rightIconName={'chevron-forward'}
          rightIconSize={25}
        />
        <CustomSettingOption
          onPress={() => RootNavigation.navigate('feedback')}
          optionIconName={'paper-plane-sharp'}
          optionIconSize={29}
          OptionIconColor={Colors.orange}
          title={'Send Feeback'}
          rightIconName={'chevron-forward'}
          rightIconSize={25}
        />
      </View>
      <View style={styles.footer}>
        <Text>
          {'\u00A9'} {year} NIDA. All rights reserved
        </Text>
      </View>
    </View>
  );
};

export default Settings;
