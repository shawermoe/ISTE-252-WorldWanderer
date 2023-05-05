import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Palette from "../config/Palette";

function InfluencerComponent({ name, image, quote }) {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const followButtonText = isFollowing ? "Unfollow" : "Follow";

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.quote}>"{quote}"</Text>
      <TouchableOpacity
        style={[
          styles.followButton,
          { backgroundColor: isFollowing ? "white" : "black" },
          { borderColor: "black" },
        ]}
        onPress={toggleFollow}
      >
        <Text
          style={[
            styles.followButtonText,
            { color: isFollowing ? "black" : "white" },
          ]}
        >
          {followButtonText}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
    borderColor: Palette.primary,
    borderWidth: 1,
    margin: 20,
    borderRadius: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  quote: {
    fontStyle: "italic",
    fontSize: 18,
    marginVertical: 10,
  },
  followButton: {
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
    width: "100%",
  },
  followButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default InfluencerComponent;
