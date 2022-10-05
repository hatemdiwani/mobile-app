import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'
import Auth from './Auth'
import { View } from 'react-native'
const Main = () => {

    const { token } = useSelector(state => state.auth)

    return (
        <>

            {
                token
                    ?
                    <Home />
                    :
                    <Auth />
            }

            <View style={{back}} >

            </View>

        </>
    )
}

export default Main