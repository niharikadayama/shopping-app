import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from 'theme';
import HomeScreen from 'screen/homeScreen';
import Wishlist from 'screen/wishlist';
import Profile from 'screen/profile';
import Settings from 'screen/settings';
import Support from 'screen/support';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({route}) => ({
        header: () => null,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            size = focused ? 29 : 27;
          } else if (route.name === 'wishlist') {
            iconName = focused ? 'heart-sharp' : 'heart-outline';
            size = focused ? 35 : 30;
          } else if (route.name === 'profile') {
            iconName = focused ? 'person' : 'person-outline';
            size = focused ? 30 : 31;
          } else if (route.name === 'Settings') {
            iconName = focused ? 'cog-sharp' : 'cog-outline';
            size = focused ? 35 : 34;
          } else if (route.name === 'Support') {
            iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-outline';
            size = focused ? 32 : 30;
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.activeIcon,
        tabBarInactiveTintColor: Colors.inactiveIcon,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="wishlist" component={Wishlist} />
      <Tab.Screen name="profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Support" component={Support} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
