import React from "react";
import { ScrollView } from "react-native";
import CityComponent from "../components/CityComponent";

const citiesData = [
  {
    title: "New York City",
    subTitle: "The City That Never Sleeps",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?fit=crop&w=500&h=300",
  },
  {
    title: "Los Angeles",
    subTitle: "City of Angels",

    image: "https://images.unsplash.com/photo-1515896769750-31548aa180ed",
  },
  {
    title: "London",
    subTitle: "A Tale of Two Cities",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad",
  },
  {
    title: "Paris",
    subTitle: "The City of Lights",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
  },
  {
    title: "Tokyo",
    subTitle: "A City of Contrasts",

    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
  },
];

function HomeScreen() {
  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      {citiesData.map((city, index) => (
        <CityComponent
          key={index}
          title={city.title}
          subTitle={city.subTitle}
          image={{ uri: city.image }}
        />
      ))}
    </ScrollView>
  );
}

export default HomeScreen;
