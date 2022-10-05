import React from "react";

// import things related to React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import Home from "../screens/Home/Home";
import ProductsCategory from "../screens/Home/ProductsCategory";
import { Text, View } from "react-native";

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <View  >
        <Text style={{color : 'red'}} >hhheee</Text>
<NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Home" component={Home} />
        <MyStack.Screen name="ProductsCategory" component={ProductsCategory} />
      </MyStack.Navigator>
    </NavigationContainer>
    </View>
    
  );
};

export default App;