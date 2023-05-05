import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ViewingScreen from "../components/ViewingScreen";
import Icon from "../components/Icon";

import ExploreScreen from "./ExploreScreen";
import TipsScreen from "./TipsScreen";
import AccountScreen from "./AccountScreen";

const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
    <>
      <ViewingScreen></ViewingScreen>
    </>
  );
}

export default MainScreen;
