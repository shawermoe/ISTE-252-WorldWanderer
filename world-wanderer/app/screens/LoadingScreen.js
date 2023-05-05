import React from "react";
import { StyleSheet } from "react-native";

import ViewingScreen from "../components/ViewingScreen";
import Icon from "../components/Icon";
import Palette from "../config/Palette";

function LoadingScreen() {
  return (
    <ViewingScreen style={styles.container}>
      <Icon name={"world-o"} size={50} color={Palette.primary} />
    </ViewingScreen>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center" },
});

export default LoadingScreen;
