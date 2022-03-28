import React, {useState} from 'react';
import * as RootNavigation from '../../services/navigationServices';
import {View, Text, TouchableOpacity, Switch} from 'react-native';
import styles from './styles';
import Header from 'components/header';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'theme';
import {useTheme} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';

const Settings = () => {
  let year = new Date().getFullYear();
  const [darkMode, setDarkMode] = useState(false);
  const {colors} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.card}]}>
      <Header
        leftIcon={'chevron-back'}
        rightIcon={'close'}
        iconSize={25}
        onLeftIconPress={() => {
          RootNavigation.navigate('profile');
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
        <TouchableOpacity
          style={[styles.sectionBody, {backgroundColor: colors.card}]}
          onPress={() => {
            RootNavigation.navigate('profile');
          }}>
          <View style={styles.body}>
            <Icon name="person-circle" size={35} color={Colors.darkCoral} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Anshuman Singh
            </Text>
          </View>
          <Icon name="chevron-forward" size={25} style={styles.sectionIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={[styles.sectionHeading, {color: colors.text}]}>
          Settings
        </Text>
        <View style={[styles.sectionBody, {backgroundColor: colors.card}]}>
          <View style={styles.body}>
            <Icon name="globe" size={35} color={Colors.dullGreen} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Language
            </Text>
          </View>
          <Icon name="chevron-forward" size={25} style={styles.sectionIcon} />
        </View>
        <View style={[styles.sectionBody, {backgroundColor: colors.card}]}>
          <View style={styles.body}>
            <Icon name="notifications" size={29} color={Colors.blue} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Notifications
            </Text>
          </View>
          <Icon name="chevron-forward" size={25} style={styles.sectionIcon} />
        </View>
        <View style={[styles.sectionBody, {backgroundColor: colors.card}]}>
          <View style={styles.body}>
            <Icon name="moon" size={30} color={Colors.purple} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Dark Mode
            </Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={val => {
              setDarkMode(val);
              EventRegister.emit('changeThemeEvent', val);
            }}
          />
        </View>
        <View style={[styles.sectionBody, {backgroundColor: colors.card}]}>
          <View style={styles.body}>
            <Icon name="bug" size={29} color={Colors.red} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Report Issue
            </Text>
          </View>
          <Icon name="chevron-forward" size={25} style={styles.sectionIcon} />
        </View>
        <TouchableOpacity
          style={[styles.sectionBody, {backgroundColor: colors.card}]}
          onPress={() => {
            RootNavigation.navigate('feedback');
          }}>
          <View style={styles.body}>
            <Icon name="paper-plane-sharp" size={29} color={Colors.orange} />
            <Text style={[styles.sectionText, {color: colors.text}]}>
              Send Feeback
            </Text>
          </View>
          <Icon name="chevron-forward" size={25} style={styles.sectionIcon} />
        </TouchableOpacity>
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
