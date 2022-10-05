import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import AppBar from '../../components/general/AppBar'

const SearchProdcuts = () => {

    const {} = useSelector()

    return (
        <View>
            <AppBar />
            <Text>Result : </Text>
        </View>
    )
}

export default SearchProdcuts