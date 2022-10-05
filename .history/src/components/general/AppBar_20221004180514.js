import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View } from 'react-native';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

const AppBar = () => (
  <View>
    <FontAwesomeIcon icon={faMugSaucer} />
  </View>
);

export default AppBar;