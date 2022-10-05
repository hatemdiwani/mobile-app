import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acceuil from '../screens/Home/Home'
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Home = () => {
    return (
        <View style={{ flex: 1 , backgroundColor : 'black' , height:"100%" , width : "100%" }}>
<Text style={{color : 'red'}} >heeeee</Text>
       {/*      <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Acceuil} />
                </Stack.Navigator>
            </NavigationContainer> */}
       
        </View>

    )
}

export default Home