import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from '../screens/Home/Home'
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();
const Home = () => {
    return (
        <View>
            <Text style={{ color: 'red' }} >heeeee</Text>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="home" component={Acceuil} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    )
}

export default Home