import React, { useState } from 'react'
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { theme } from '../../core/theme'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { setKeyword } from '../../redux/features/appSlice'
const SearchBar = () => {

    const navigation = useNavigation();

    const [word, setWord] = useState('')

    const dispatch = useDispatch()

    const handleSearch = () => {
        dispatch(setKeyword())
    }

    return (
        <View style={styles.container} >
            <View style={styles.searchBarContainer} >
                <TextInput value={word} onChangeText={text => setWord(text)} style={styles.input} />
                <TouchableOpacity onPress={handleSearch} >
                    <FontAwesomeIcon icon={faMagnifyingGlass} size={24} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    searchBarContainer: {
        borderColor: 'lightgrey',
        borderRadius: 10,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        padding: 10,
    },
    icon: {
        color: theme.colors.primary
    },
    input: {
        height: 35,
        color: 'black',
        width: '90%',
    }
})

export default SearchBar