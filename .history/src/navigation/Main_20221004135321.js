import React from 'react'
import { useSelector } from 'react-redux'
import Home from './Home'
import Auth from './Auth'
import { View } from 'react-native'
const Main = () => {

    const { token } = useSelector(state => state.auth)

    return (
       

           

            <View style={{backgroundColor : 'red' , height:1000 , width:"100%"}} >
 {
                token
                    ?
                    <Home />
                    :
                    <Auth />
            }
            </View>

    )
}

export default Main