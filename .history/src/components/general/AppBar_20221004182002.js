import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, View } from 'react-native';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import {theme} from "../../core/theme"
import Input from '../../components/general/'
const AppBar = () => (
  <View style={styles.container} >
    <FontAwesomeIcon icon={faHouse}  size={ 24 } style={styles.icon} />
    <Input />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: "100%",
    padding: 15,
    backgroundColor : theme.colors.primary
  },

  icon : {
    color : 'white'
  }
})

export default AppBar;