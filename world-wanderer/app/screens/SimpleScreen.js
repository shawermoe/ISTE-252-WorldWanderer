import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");
const images = [
  { uri: "https://picsum.photos/id/1002/600/400" },
  { uri: "https://picsum.photos/id/1003/600/400" },
  { uri: "https://picsum.photos/id/1004/600/400" },
  { uri: "https://picsum.photos/id/1005/600/400" },
  { uri: "https://picsum.photos/id/1006/600/400" },
];

const SimpleScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  const handleGetStarted = () => {
    // Handle button press
  };

  const pagination = () => (
    <View style={styles.pagination}>
      {images.map((image, index) => (
        <View
          key={index}
          style={[
            styles.paginationDot,
            index === activeIndex && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );

  return (
    <>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <ImageBackground key={index} source={image} style={styles.slide} />
        ))}
        <View style={styles.slide}>
          <Text style={styles.slideText}>Get started</Text>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {pagination()}
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  slideText: {
    fontSize: 32,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#333",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  pagination: {
    position: "absolute",
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: "#ccc",
  },
  activeDot: {
    backgroundColor: "#333",
  },
});

export default SimpleScreen;
