
import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';
import Acceuil from '../screens/Home/Home'
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Home = () => {
    return (
      
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Acceuil} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Home