import React from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from '../screens/Home/Home'
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Home = () => {
    return (

      
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Acceuil} />
            </Stack.Navigator>
   
    )
}

export default Home