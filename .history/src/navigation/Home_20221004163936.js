import React from "react";

// import things related to React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import Home from "../screens/Home/Home";
import ProductsCategory from ".";

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Home" component={Home} />
        <MyStack.Screen name="Screen2" component={Screen2} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;