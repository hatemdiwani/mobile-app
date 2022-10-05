import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
<i class="fa-solid fa-magnifying-glass"></i>
const SearchBar = () => {
    return (
        <View>
            <TextInput style={styles.input} />
            <FontAwesomeIcon icon={faCartShopping} size={24} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'lightgrey',
        borderRadius: 4,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    }
})

export default SearchBar