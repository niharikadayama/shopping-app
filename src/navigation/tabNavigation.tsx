import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from "theme";

import HomeScreen from "screens/homeScreen";
import Wishlist from "screens/wishlist";
import Cart from "screens/cart";

const Tab = createBottomTabNavigator();


const BottomTabNavigator = () => {
    return (
      <Tab.Navigator initialRouteName = {'Home'}
      screenOptions = {({route}) => ({
        header: () => null,
        tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === 'Home'){
                iconName = focused ? 'home' : 'home-outline'
                size = focused ? 29 : 27
            } else if(route.name === 'Wishlist'){
                iconName = focused ? 'heart-sharp' : 'heart-outline'
                size = focused ? 32 : 30
            }else if(route.name === 'Settings'){
              iconName = focused ? 'ios-cog-sharp' : 'ios-cog-outline'
              size = focused ? 33 : 32
            }else if(route.name === 'Support'){
              iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-outline'
              size = focused ? 32 : 30
            }
            return (<Icon
             name={iconName} 
             size={size} 
             color={color} 
             />
            )
        },
        tabBarActiveTintColor: colors.darkCoral,
        tabBarInactiveTintColor: colors.darkGrey,
        showLabel: false,
      })}
     >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name= "Wishlist" component = {Wishlist} />
        <Tab.Screen name= "Settings" component = {Cart} />
        <Tab.Screen name= "Support" component = {Cart} />
      </Tab.Navigator>
     
    );
  };
  
  export default BottomTabNavigator;