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
  {
    uri: "https://greecetravelideas.com/wp-content/uploads/2017/08/Arch-with-a-bell-white-houses-and-church-with-blue-domes-in-Oia-or-Ia-at-sunset-island-Santorini-Greece-min.jpg",
  },
  {
    uri: "https://www.studentuniverse.com/blog/wp-content/uploads/2019/09/costa-brava.jpg",
  },
  {
    uri: "https://i0.wp.com/handluggageonly.co.uk/wp-content/uploads/2020/09/HandLuggageOnly-6-3.jpg?w=1600&ssl=1",
  },
  {
    uri: "https://www.theglobetrottingdetective.com/wp-content/uploads/2021/01/Dubai-in-7-days-and-best-things-to-do-in-Dubai-.jpg",
  },
  {
    uri: "https://focusgreece.com/wp-content/uploads/2018/08/Navagio-Beach-2.jpg",
  },
];

const SimpleScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  const handleGetStarted = () => {
    navigation.navigate("Sign Up");
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
          <Text style={styles.slideText}>Welcome</Text>
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
