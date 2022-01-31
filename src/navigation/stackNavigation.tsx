import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Splash from 'screen/splash';
import Login from 'screen/login';
import SignUp from 'screen/signup';
import Details from 'screen/details';
import Cart from 'screen/cart';
import EditProfile from 'screen/profile/Edit-profile/editProfile';
import ItemDetail from 'screen/itemDetail';

//Tab
import BottomTabNavigator from './tabNavigation';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
      }}>
      
        <>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </>
     
        <>
          <Stack.Screen name="root" component={BottomTabNavigator} />
          <Stack.Screen name="details" component={Details} />
          <Stack.Screen name="cart" component={Cart} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </>
  
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
