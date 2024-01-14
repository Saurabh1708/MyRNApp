import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './src/Home/Home';
import {LanguageSelection} from './src/LanguageSelection/LanguageSelection.tsx';
import {initBackgroundFetch} from './src/utility/BackgroundTask';
import {useThemeStore} from './src/utility/useThemeStore.ts';
import {NavigationContainer} from '@react-navigation/native';
import './i18.config.ts';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  useThemeStore();

  useEffect(() => {
    initBackgroundFetch();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Language">
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={'Language'}
          component={LanguageSelection}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
