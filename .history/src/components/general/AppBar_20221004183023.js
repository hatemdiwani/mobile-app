import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, TextInput, View } from 'react-native';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { theme } from "../../core/theme"
import { Badge } from 'react-native-paper';
const AppBar = () => (
  <View style={styles.container} >
    <FontAwesomeIcon icon={faHouse} size={24} style={styles.icon} />
    <TextInput style={styles.input} />
    <View>
      <FontAwesomeIcon icon={faCartShopping} size={24} style={styles.icon} />
      <Badge style={styles.badge} >3</Badge>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: theme.colors.primary
  },

  icon: {
    color: 'white'
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartIcon: {
    color: 'white',
    position: 'absolute',
    top: 10
  },
  badge: {
    position: 'absolute',
    top: -10,
    right: -10
  },
  input : {
  borderColor : 'white',
  borderWidth : 1,
  borderTopColor : theme.colors.primary,
  borderLeftColor : 
  }
})

export default AppBar;