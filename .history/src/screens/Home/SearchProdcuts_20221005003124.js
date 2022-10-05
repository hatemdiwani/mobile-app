import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import AppBar from '../../components/general/AppBar'

const SearchProdcuts = () => {

    const {searchBar} = useSelector(state => state.app)

    return (
        <View>
            <AppBar />
            <Text>Result for : </Text>
        </View>
    )
}

export default SearchProdcuts