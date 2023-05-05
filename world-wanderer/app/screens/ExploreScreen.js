import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import InfluencerComponent from "../components/InfluencerComponent";

async function getRandomPersonImageUrl() {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  return data.results[0].picture.large;
}

const travelData = [
  {
    name: "John",
    quote:
      "The world is a book and those who do not travel read only one page.",
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Emily",
    quote: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.",
    imageUrl: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "David",
    quote: "Not all those who wander are lost.",
    imageUrl: "https://randomuser.me/api/portraits/men/37.jpg",
  },
  {
    name: "Jessica",
    quote: "A journey of a thousand miles begins with a single step.",
    imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Thomas",
    quote: "Life is either a daring adventure or nothing at all.",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Sophia",
    quote: "To travel is to live.",
    imageUrl: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "Daniel",
    quote:
      "Traveling - it leaves you speechless, then turns you into a storyteller.",
    imageUrl: "https://randomuser.me/api/portraits/men/87.jpg",
  },
  {
    name: "Olivia",
    quote: "I haven't been everywhere, but it's on my list.",
    imageUrl: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Ethan",
    quote:
      "The gladdest moment in human life is a departure into unknown lands.",
    imageUrl: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Ava",
    quote: "We travel not to escape life, but for life not to escape us.",
    imageUrl: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

function ExploreScreen() {
  const renderItem = ({ item }) => (
    <InfluencerComponent
      name={item.name}
      image={item.imageUrl}
      quote={item.quote}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={travelData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
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
