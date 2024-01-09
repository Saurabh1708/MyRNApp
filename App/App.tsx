/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './src/Home/Home';
import {initBackgroundFetch} from './src/utility/BackgroundTask';
import {getCurrentEnv} from './src/Home/Home.utils';
import {useTheme} from './src/utility/useTheme';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const env = getCurrentEnv();

function App(): React.JSX.Element {
  const setTheme = useTheme(state => state.setTheme);

  useEffect(() => {
    initBackgroundFetch();
    setTheme(env);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
