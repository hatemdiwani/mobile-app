import React from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import AppBar from '../../components/general/AppBar'

const SearchProdcuts = () => {

    const {searchBar} = useSelector(state => state.app)

    useS

    return (
        <View>
            <AppBar />
            <Text>Result for  {searchBar.keyword} :  </Text>
        </View>
    )
}

export default SearchProdcuts