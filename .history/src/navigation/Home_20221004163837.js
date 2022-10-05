import React from "react";

// import things related to React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import screens
import Screen1 from "./screens/Screen1";
import Screen2 from "./screens/Screen2";

// create a "stack"
const MyStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyStack.Navigator>
        <MyStack.Screen name="Screen1" component={Screen1} />
        <MyStack.Screen name="Screen2" component={Screen2} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default App;