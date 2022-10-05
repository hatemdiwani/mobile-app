import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, View } from 'react-native';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import {theme} from "../../core/theme"

const AppBar = () => (
  <View style={styles.container} >
    <FontAwesomeIcon icon={faHouse}  size={ 24 } style={styles.icon} />
    <View>

    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: "100%",
    flexDirection :"row",
    padding: 15,
    backgroundColor : theme.colors.primary
  },

  icon : {
    color : 'white'
  },
  cartIcon : {
    
  }
})

export default AppBar;