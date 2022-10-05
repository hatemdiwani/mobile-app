import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { StyleSheet, View } from 'react-native';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'

const AppBar = () => (
  <View style= >
    <FontAwesomeIcon icon={faHouse} />
  </View>
);

const styles = StyleSheet.create({
  container : {
    display : 'flex' , 
    width : "100%",
    padding : 15
  }
})

export default AppBar;