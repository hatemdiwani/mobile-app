import React from 'react'
import { Text, View } from 'react-native'
import SearchBar from '../../components/general/SearchBar'
import AppBar from '../../components/general/AppBar'
import Categories from '../../components/categories/Categories'


const HomePage = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar />
            <SearchBar />
            <Categories />
        </View>
    )
}

export default HomePage