import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text>ExploreScreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});

export default ExploreScreen;
