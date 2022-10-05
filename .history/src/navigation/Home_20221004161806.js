import React from 'react'

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from '../screens/Home/Home'
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

consttheme = {
    ...DefaultTheme,

    colors
        : {
        ...DefaultTheme.colors,

        background
            :
            'black'
        ,
    },
}
const Home = () => {
    return (

        <NavigationContainer the >
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Acceuil} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Home