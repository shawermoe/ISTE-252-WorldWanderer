import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // import Ionicons from expo/vector-icons library

import ExploreScreen from "./ExploreScreen";
import TipsScreen from "./TipsScreen";
import AccountScreen from "./AccountScreen";
import HomeScreen from "./HomeScreen";
import AboutScreen from "./AboutScreen";

import Palette from "../config/Palette";

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline"; // set icon names for Home tab
          } else if (route.name === "Explore") {
            iconName = focused ? "ios-compass" : "ios-compass-outline"; // set icon names for Explore tab
          } else if (route.name === "Tips") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline"; // set icon names for Tips tab
          } else if (route.name === "About") {
            iconName = focused ? "help-circle" : "help-circle-outline"; // set icon names for About tab
          } else if (route.name === "Account") {
            iconName = focused ? "ios-person" : "ios-person-outline"; // set icon names for Account tab
          }

          // Return the appropriate Ionicon component based on the iconName and other parameters
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: Palette.primary,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Tips" component={TipsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />

      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainScreen;
