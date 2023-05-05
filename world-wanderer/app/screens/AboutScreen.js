import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Palette from "../config/Palette";
import ViewingScreen from "../components/ViewingScreen";

function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <ViewingScreen>
        <Text style={styles.title}>About </Text>
        <Text style={styles.titleSpan}>WorldWanderer</Text>
        <Text style={styles.description}>
          WorldWanderer is a travel app that helps you discover new places to
          explore around the world. It provides you with recommendations and
          reviews from other travelers, as well as helpful tips and guides to
          make your journey a success. Whether you're planning a trip to a new
          city, or you're a seasoned traveler looking for your next adventure,
          WorldWanderer has something for everyone. With a user-friendly
          interface and a wealth of information at your fingertips, you can
          easily plan your dream vacation and make memories that will last a
          lifetime.
        </Text>
        <Text style={styles.description}>
          Here are 5 reasons why you should use WorldWanderer for your next
          trip:
        </Text>
        <View style={styles.listContainer}>
          <Text style={styles.listItem}>
            1. Discover new places: With WorldWanderer, you can explore new
            destinations and discover hidden gems that you may not have known
            about otherwise.
          </Text>
          <Text style={styles.listItem}>
            2. Get trusted recommendations: Our app provides you with
            recommendations and reviews from other travelers, so you can make
            informed decisions about where to stay, what to do, and where to
            eat.
          </Text>
          <Text style={styles.listItem}>
            3. Save time and money: WorldWanderer helps you save time and money
            by providing you with information about the best deals on flights,
            hotels, and activities.
          </Text>
          <Text style={styles.listItem}>
            4. Plan your trip with ease: Our user-friendly interface makes it
            easy to plan your trip, from finding the perfect hotel to creating a
            detailed itinerary.
          </Text>
          <Text style={styles.listItem}>
            5. Access helpful resources: WorldWanderer provides you with a
            wealth of information and resources, including travel guides,
            packing lists, and tips for staying safe while traveling.
          </Text>
        </View>
      </ViewingScreen>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 20,
  },
  listContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
  },
  titleSpan: {
    color: Palette.primary,
    fontSize: 36,
    marginBottom: 20,
  },
});

export default AboutScreen;
