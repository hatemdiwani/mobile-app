/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { Provider } from 'react-redux';

const App = () => {
  

  return (
    <SafeAreaView >
     
     <Provider store={store}>
      ...
    </Provider>
    </SafeAreaView>
  );
};


export default App;
