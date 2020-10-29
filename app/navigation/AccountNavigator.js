import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import AboutScreen from "../screens/AboutScreen";
import HelpScreen from "../screens/HelpScreen";
import AddCardScreen from "../screens/AddCardScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={AccountScreen} />
    <Stack.Screen name="Messages" component={MessagesScreen} />
    <Stack.Screen name="About" component={AboutScreen} />
    <Stack.Screen name="Help" component={HelpScreen} />
    <Stack.Screen name="AddCard" component={AddCardScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
