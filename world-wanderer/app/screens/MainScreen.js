import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ExploreScreen from "./ExploreScreen";
import TipsScreen from "./TipsScreen";
import AccountScreen from "./AccountScreen";
import { Text } from "react-native";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Tips" component={TipsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainScreen;
