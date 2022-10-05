import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from '../screens/Home/Home'
import { Text, View } from 'react-native';

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}


const Stack = createNativeStackNavigator();
const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Home