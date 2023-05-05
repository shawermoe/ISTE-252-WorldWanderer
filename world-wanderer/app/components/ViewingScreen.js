import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

function ViewingScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginTop: 50,
    marginBottom: 120,
  },
});

export default ViewingScreen;
