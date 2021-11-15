import React from "react";
import { createStackNavigator} from "@react-navigation/stack";


import HomeScreen from 'screen/homeScreen';
import Details from 'screen/details';
import Cart from 'screen/cart';
import ItemDetail from 'screen/itemDetail';
import Splash from 'screen/splash';
import Login from 'screen/login';
import SignUp from 'screen/signup'

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