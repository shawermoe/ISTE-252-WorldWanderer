import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import Palette from "../config/Palette";

function CustomButton({ children, style, ...otherProps }) {
  return (
    <TouchableOpacity style={Palette.primaryButton} {...otherProps}>
      <Text style={styles.label}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  label: {
    color: Palette.white,
    fontSize: 20,
    textAlign: "center",
  },
});

export default CustomButton;
