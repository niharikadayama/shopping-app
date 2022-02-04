import React from 'react';
import {View, Text, TouchableOpacity,Switch} from 'react-native';
import styles from './styles';
import Header from 'components/header';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'theme';

const Settings = ({navigation}) => {
  let year = new Date().getFullYear();
  return (
    <View style={styles.container}>

      <Header leftIcon={"ios-chevron-back"} rightIcon={""} size={25}
            onLeftIconPress ={()=>{ navigation.navigate('profile') }}
            onRightIconPress ={()=>{ navigation.navigate('profile') }}
            image= {false} heading={'Settings'}
      />
      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Account</Text>
        <TouchableOpacity style={styles.sectionBody}
              onPress={()=>{navigation.navigate('profile')}}
        >
          <View style={styles.body}>
            <Icon name="person-circle" size={35} color={Colors.darkCoral} />
            <Text style={styles.sectionText}>Anshuman Singh</Text>
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
            <Icon name="globe" size={35} color={Colors.dullGreen} />
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
            <Icon name="notifications" size={29} color={Colors.blue} />
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
            <Icon name="ios-moon" size={30} color={Colors.purple} />
            <Text style={styles.sectionText}>Dark Mode</Text>
          </View>
          <Switch />
        </View>
        <View style={styles.sectionBody}>
          <View style={styles.body}>
            <Icon name="bug" size={29} color={Colors.red} />
            <Text style={styles.sectionText}>Report Issue</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </View>
        <TouchableOpacity style={styles.sectionBody} onPress={()=>{navigation.navigate('feedback')}}>
          <View style={styles.body}>
            <Icon name="paper-plane-sharp" size={29} color={Colors.orange} />
            <Text style={styles.sectionText}>Send Feeback</Text>
          </View>
          <Icon
            name="ios-chevron-forward"
            size={25}
            style={styles.sectionIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>{'\u00A9'} {year} NIDA. All rights reserved</Text>
      </View>
    </View>
  );
};

export default Settings;
