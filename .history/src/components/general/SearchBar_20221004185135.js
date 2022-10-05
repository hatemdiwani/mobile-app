import React from 'react'
import { StyleSheet, View } from 'react-native'
import TextInput from './Input'

const SearchBar = () => {
  return (
    <View>

<TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        borderColor : 'lightgrey',
        borderRadius : 4,
        width : '100%',
        display : 'flex',
        justifyContent : 'space-between'
    }
})

export default SearchBar