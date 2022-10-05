import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { theme } from '../../core/theme'

const SearchBar = () => {
    return (
        <View>
            <TextInput style={styles.input} />
            <FontAwesomeIcon icon={faMagnifyingGlass} size={24} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'gray',
        borderRadius: 4,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    icon : {
        color : theme.colors.primary
    }
})

export default SearchBar