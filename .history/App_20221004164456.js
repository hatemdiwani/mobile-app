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

const App = () => {
  return (

    <NavigationContainer >
      <MyStack.Navigator>
        <MyStack.Screen name="Home" component={Home} />
        <MyStack.Screen name="ProductsCategory" component={ProductsCategory} />
      </MyStack.Navigator>
    </NavigationContainer >
  );
};


export default App;