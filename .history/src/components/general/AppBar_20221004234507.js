import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, TextInput, View } from 'react-native';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { theme } from "../../core/theme"
import { Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const AppBar = () => {
  const navigation = useNavigation();
  const { products } = useSelector(state => state.cart)

  return (
    <View style={styles.container} >
      <FontAwesomeIcon icon={faHouse} size={24} style={styles.icon} />
      <View>
        <FontAwesomeIcon icon={faCartShopping} size={24} style={styles.icon} />
        <Badge style={styles.badge} >{products.length}</Badge>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: "100%",
    alignItems: 'center',
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
  inputContainer: {
    borderColor: 'white',
    borderWidth: 1,
    borderTopColor: theme.colors.primary,
    borderLeftColor: theme.colors.primary,
    borderRightColor: theme.colors.primary,

  },
  input: {
    width: '80%',
    borderColor: 'white',
    borderTopColor: theme.colors.primary,
    borderLeftColor: theme.colors.primary,
    borderRightColor: theme.colors.primary,

    borderWidth: 1,
    height: 30
  }
})

export default AppBar;