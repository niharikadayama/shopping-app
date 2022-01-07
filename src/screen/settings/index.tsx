import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import ToggleSwitch from 'toggle-switch-react-native';
import {colors} from 'theme/colors';

const Settings = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="ios-chevron-back" size={22} />
        <Text style={styles.headerHeading}>Settings</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Account</Text>
        <TouchableOpacity style={styles.sectionBody}>
          <View style={styles.body}>
            <Icon name="person-circle" size={35} color={colors.darkCoral} />
            <Text style={styles.sectionText}>Niharika Dayama</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Settings</Text>
        <View style={styles.sectionBody}>
          <View style={styles.body}>
            <Icon name="globe" size={35} color={colors.dullGreen} />
            <Text style={styles.sectionText}>Language</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </View>
        <View style={styles.sectionBody}>
          <View style={styles.body}>
            <Icon name="notifications" size={29} color={colors.blue} />
            <Text style={styles.sectionText}>Notifications</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </View>
        <View style={styles.sectionBody}>
          <View style={styles.body}>
            <Icon name="ios-moon" size={30} color={colors.purple} />
            <Text style={styles.sectionText}>Dark Mode</Text>
          </View>
          <ToggleSwitch
            isOn={false}
            onColor={colors.darkGrey}
            offColor={colors.mediumGrey}
            label="OFF"
            size="medium"
          />
        </View>
        <View style={styles.sectionBody}>
          <View style={styles.body}>
            <Icon name="bug" size={29} color={colors.red} />
            <Text style={styles.sectionText}>Report Issue</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </View>
        <View style={styles.sectionBody}>
          <View style={styles.body}>
            <Icon name="paper-plane-sharp" size={29} color={colors.orange} />
            <Text style={styles.sectionText}>Send Feeback</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <Text>{'\u00A9'} 2021 NIDA. All rights reserved</Text>
      </View>
    </View>
  );
};

export default Settings;
