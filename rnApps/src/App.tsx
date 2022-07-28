import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AppContextProvider} from './provider/appsContextProvider';
import RootStack from './route/navigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContextProvider>
        <RootStack />
      </AppContextProvider>
    </SafeAreaProvider>
  );
};

export default App;
