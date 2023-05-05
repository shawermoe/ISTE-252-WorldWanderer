import React from "react";
import { Fontisto } from "@expo/vector-icons";

function Icon({ name, size, color }) {
  return <Fontisto name={name} size={size} color={color} />;
}

export default Icon;
