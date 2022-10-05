/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-native-paper'
import { Provider } from 'react-redux';
import Main from './src/navigation/Main';
import { store } from './src/redux/app/store';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};


export default App;