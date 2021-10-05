import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



import HomeScreen from './src/Screens/HomeScreen'
import Details from "./src/Screens/Details";
import Cart from './src/Screens/Cart';
import ItemDetail from './src/Screens/ItemDetail';

const Stack = createNativeStackNavigator();

const App = () =>{
  return(
      <NavigationContainer>
      <Stack.Navigator screenOptions={{header: () => null }}>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="details" component={Details}/>
      <Stack.Screen name="cart" component={Cart}/>
      <Stack.Screen name="ItemDetail" component={ItemDetail} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}

export default App;
