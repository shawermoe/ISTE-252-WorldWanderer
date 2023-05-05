import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import auth from "../../firebaseConfig";
import Palette from "../config/Palette";
import ViewingScreen from "../components/ViewingScreen";

function AccountScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (!user) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <ViewingScreen style={styles.container}>
        <Text style={styles.title}>Check Out</Text>
        <Text style={styles.title}>
          Your <Text style={styles.titleSpan}>Account</Text>
        </Text>

        <Image
          source={{
            uri: user.photoURL || "https://i.stack.imgur.com/l60Hf.png",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.emailText}>{user.email}</Text>
      </ViewingScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  profileImage: {
    marginTop: 50,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  emailText: {
    marginTop: 20,
    fontSize: 18,
  },
  title: {
    fontSize: 36,
    alignSelf: "flex-start",
  },
  titleSpan: {
    color: Palette.primary,
  },
});

export default AccountScreen;
