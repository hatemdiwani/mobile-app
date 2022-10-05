import React from 'react'

import Acceuil from '../screens/Home/Home'
import { Text, View } from 'react-native';

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