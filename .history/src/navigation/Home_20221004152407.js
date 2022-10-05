import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from '../screens/Home/Home'

const Stack = createNativeStackNavigator();
const Home = () => {
    return (
        <View>
            
        </View>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Acceuil} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Home