import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import Acceuil from '../screens/Home'
const Home = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Acceuil} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Home