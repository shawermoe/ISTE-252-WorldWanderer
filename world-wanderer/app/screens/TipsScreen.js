import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function TipsScreen() {
  const [hotelData, setHotelData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://hotels-com-provider.p.rapidapi.com/v2/hotels/reviews/list?domain=AE&locale=en_GB&hotel_id=1105156&page_number=1";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "47d54769femsh13f0f35eca98920p196339jsne6716c461285",
          "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();

        console.log(result);
        setHotelData(result);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <ScrollView style={styles.container}>
      {hotelData && hotelData.reviewInfo ? (
        <>
          {hotelData.reviewInfo.reviews.map((review, index) => (
            <View key={index} style={styles.review}>
              <Text style={styles.author}>
                {review.reviewAuthorAttribution
                  ? review.reviewAuthorAttribution
                  : "Anonymous"}
              </Text>
              <Text style={styles.comment}>{review.text || "No comment"}</Text>
            </View>
          ))}
        </>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: "#fff",
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  globeIcon: {
    marginRight: 8,
  },
  hotelName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  review: {
    marginTop: 8,
  },
  author: {
    fontSize: 16,
    fontWeight: "bold",
  },
  comment: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default TipsScreen;
