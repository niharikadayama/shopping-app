import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from 'screens/homeScreen';
import Details from 'screens/details';
import Cart from 'screens/cart';
import ItemDetail from 'screens/itemDetail';
import Splash from 'screens/splash';
import Login from 'screens/login';
import SignUp from 'screens/signup'

import BottomTabNavigator from "./tabNavigation";

const Stack = createStackNavigator();


const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{header: () => null }}>
        <Stack.Screen name="splash" component={Splash}/>
        <Stack.Screen name="login" component={Login}/>
        <Stack.Screen name="signup" component={SignUp}/> 
        <Stack.Screen name="root" component={BottomTabNavigator}/>
        <Stack.Screen name="details" component={Details}/>
        <Stack.Screen name="cart" component={Cart}/>
        <Stack.Screen name="ItemDetail" component={ItemDetail} />
        </Stack.Navigator>
    );
  }

export default MainStackNavigator;