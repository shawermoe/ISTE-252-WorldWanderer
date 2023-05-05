import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";

import LoadingScreen from "./app/screens/LoadingScreen";
import LandingScreen from "./app/screens/LandingScreen";
import SimpleScreen from "./app/screens/SimpleScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingScreen /> : <SimpleScreen />;
  // return <SimpleScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
