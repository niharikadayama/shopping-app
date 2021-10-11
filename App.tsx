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



import HomeScreen from './src/screens/homeScreen';
import Details from './src/screens/details';
import Cart from './src/screens/cart';
import ItemDetail from './src/screens/itemDetail';

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
