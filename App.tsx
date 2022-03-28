import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import MainStackNavigator from './src/navigation/stackNavigation';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';

const App = () => {
  const [darkApp, setDarkApp] = useState(false);
  const appTheme = darkApp ? DarkTheme : DefaultTheme;
  useEffect(() => {
    return () => {
      EventRegister.removeEventListener('EventListener');
    };
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={appTheme}>
          <MainStackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
