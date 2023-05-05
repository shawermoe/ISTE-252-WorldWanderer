import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

function LandingScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {colors.map((color, index) => (
          <View
            key={color}
            style={[styles.slide, { backgroundColor: color }]}
          />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {colors.map((color, index) => (
          <View
            key={color}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  getStartedContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "transparent",
  },
});

export default LandingScreen;
