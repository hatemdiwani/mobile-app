import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from '../screens/Home/Home'
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
const Stack = createNativeStackNavigator();
const Home = () => {
    return (
        <SafeAreaView>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Acceuil} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Home