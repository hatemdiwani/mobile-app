/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper'
import Main from './src/navigation/Main';
import { store } from './src/redux/app/store';
import { theme } from './src/core/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/auth/Login';
import HomePage from './src/screens/Home/Home';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}  >

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>

      </PaperProvider>
    </Provider>
  );
};


export default App;