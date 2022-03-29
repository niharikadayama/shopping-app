import React, {useEffect, useState} from 'react';
import {Appearance} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './stackNavigation';
import {navigationRef} from 'services/navigationServices';
import {darkColors, lightColors} from 'theme';
import {useSelector} from 'react-redux';
import {IRootState} from 'redux/store';

const AppNavigation = () => {
  const [darkApp, setDarkApp] = useState(
    Appearance.getColorScheme() === 'dark',
  );
  const currentTheme = useSelector(
    (state: IRootState) => state.theme.currentTheme,
  );

  useEffect(() => {
    const eventListener = Appearance.addChangeListener(({colorScheme}) => {
      if (currentTheme === 'System') {
        setDarkApp(colorScheme === 'dark');
      }
    });
    if (currentTheme === 'System') {
      setDarkApp(Appearance.getColorScheme() === 'dark');
    } else {
      setDarkApp(currentTheme === 'Dark');
    }
    return () => eventListener.remove();
  }, [currentTheme]);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={{dark: darkApp, colors: darkApp ? darkColors : lightColors}}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
