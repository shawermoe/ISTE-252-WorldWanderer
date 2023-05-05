import React, { useState, useEffect } from "react";
import { StyleSheet, Animated } from "react-native";

import Icon from "../components/Icon";
import Palette from "../config/Palette";

function LoadingScreen() {
  const [animation, setAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
        delay: 2000,
      }).start();
    });
  }, [animation]);

  const opacity = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <Icon name={"world-o"} size={50} color={Palette.primary} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default LoadingScreen;
