import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import CoinItem from "./components/CoinItem";
import CoinMarket from "./components/CoinMarket";
import Home from "./components/Home";

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CoinItem" component={CoinItem} />
        <Stack.Screen name="CoinMarket" component={CoinMarket} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
