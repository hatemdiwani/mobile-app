import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { theme } from '../../core/theme'

const SearchBar = () => {
    return (
        <View style={styles.searchBarContainer} >
            <TextInput style={styles.input} />
            <FontAwesomeIcon icon={faMagnifyingGlass} size={24} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    co
    searchBarContainer: {
        borderColor: 'lightgrey',
        borderRadius: 4,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1
    },
    icon: {
        color: theme.colors.primary
    }
})

export default SearchBar