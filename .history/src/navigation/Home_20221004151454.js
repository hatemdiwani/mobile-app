import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import Acceuil from '../screens/Home'
const Home = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Home