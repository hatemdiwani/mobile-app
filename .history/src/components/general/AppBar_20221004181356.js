import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View } from 'react-native';
import { fa } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';
const AppBar = () => (
  <View>
    <FontAwesomeIcon icon={faHome} />
  </View>
);

export default AppBar;