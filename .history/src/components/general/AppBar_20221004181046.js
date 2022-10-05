import * as React from 'react';
import { Appbar } from 'react-native-paper';
import FontAwesome, {
  SolidIcons,
  RegularIcons,
  BrandIcons,
  parseIconFromClassName,
} from 'react-native-fontawesome';
import { View } from 'react-native';
import { faHome } from '@fortawesome/free-solid-svg-icons/faMugSaucer'

const AppBar = () => (
  <View>
    <FontAwesomeIcon icon={faHome} />
  </View>
);

export default AppBar;