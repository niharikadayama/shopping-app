import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Icon  from 'react-native-vector-icons/Ionicons';

import {colors,screenWidth} from './src/theme'

import HomeScreen from './src/screens/homeScreen';
import Details from './src/screens/details';
import Cart from './src/screens/cart';
import ItemDetail from './src/screens/itemDetail';
import Splash from './src/screens/splash';
import Login from './src/screens/login';
import SignUp from './src/screens/signup'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function home(){
  return(
    <Tab.Navigator
    initialRouteName = {'Home'}
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
    })}
    tabBarOptions={{
        activeTintColor: colors.darkCoral,
        inactiveTintColor: colors.darkGrey,
        showLabel: false,
        style:{width:screenWidth}
    }}
  >
      <Tab.Screen name= "Home" component = {HomeScreen} />
      <Tab.Screen name= "Wishlist" component = {Cart} />
      <Tab.Screen name= "Settings" component = {Cart} />
      <Tab.Screen name= "Support" component = {Cart} />
  </Tab.Navigator>
  )
}


const App = () =>{
  return(
      <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null }}>
      <Stack.Screen name="splash" component={Splash}/>
      <Stack.Screen name="login" component={Login}/>
      <Stack.Screen name="signup" component={SignUp}/>
      <Stack.Screen name="root" component={home}/>
      <Stack.Screen name="details" component={Details}/>
      <Stack.Screen name="cart" component={Cart}/>
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
      
      </NavigationContainer>
  )
}

export default App;