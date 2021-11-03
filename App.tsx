import 'react-native-gesture-handler'
import React from 'react';
import store from './src/store/store'
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { CategoryProvider } from "./src/context/categoryContext";
import {ItemProvider} from "./src/context/itemContext";
import MainStackNavigator from './src/navigation/stackNavigation';


const App = () =>{
  return(
    <Provider store={store}>
      <CategoryProvider>
      <ItemProvider>
      <NavigationContainer>
        <MainStackNavigator/>
      </NavigationContainer>
      </ItemProvider>
      </CategoryProvider>
    </Provider>
  )
}

export default App;