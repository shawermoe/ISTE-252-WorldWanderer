import React, { useState, useEffect } from "react";

import LoadingScreen from "./LoadingScreen";
import SimpleScreen from "./SimpleScreen";

function AnimationScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <LoadingScreen />
  ) : (
    <SimpleScreen navigation={navigation} />
  );
}

export default AnimationScreen;
