import React from 'react';
import reduxStore from './src/redux/store'
import {Provider} from 'react-redux'
import MainStackNavigator from './src/navigation/stackNavigation'
import { PersistGate } from 'redux-persist/integration/react'
import { NavigationContainer } from '@react-navigation/native';

const App = () =>{
  const{store, persistor} = reduxStore();

  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;
