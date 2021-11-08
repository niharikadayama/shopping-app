import 'react-native-gesture-handler'
import React from 'react';
import store from './src/redux/store'
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './src/navigation/stackNavigation';


const App = () =>{
  return(
    <Provider store={store}>
     
      <NavigationContainer>
        <MainStackNavigator/>
      </NavigationContainer>
     
    </Provider>
  )
}

export default App;