import React from 'react'
import { Text, View } from 'react-native'
import { SearchBar } from 'react-native-screens'
import AppBar from '../../components/general/AppBar'


const HomePage = () => {
    return (
        <View style={{ flex: 1 }}>
            <AppBar/>
            <SearchBar />

        </View>
    )
}

export default HomePage