import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, View } from 'react-native';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import {theme} from "../../core/theme"
import { Badge } from 'react-native-paper';
const AppBar = () => (
  <View style={styles.container} >
    <FontAwesomeIcon icon={faHouse}  size={ 24 } style={styles.icon} />
    <View>
    <FontAwesomeIcon icon={faCartShopping}  size={ 24 } style={styles.icon} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: "100%",
    flexDirection :"row",
    justifyContent : 'space-between',
    padding: 15,
    backgroundColor : theme.colors.primary
  },

  icon : {
    color : 'white'
  },
  cartIconContainer : {
    position : 'relative'
  },
  cartIcon : {
    color : 'white',
    position : 'absolute'
  },
  badge : {
    position: 'absolute'
  }
})

export default AppBar;