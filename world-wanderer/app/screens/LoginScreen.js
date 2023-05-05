import React from "react";
import { Text, StyleSheet, View, TextInput, Alert } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Base64 from "react-native-base64";

import ViewingScreen from "../components/ViewingScreen";
import Palette from "../config/Palette";
import CustomButton from "../components/CustomButton";

import auth from "../../firebaseConfig"; // Import the auth instance you created earlier
import { signInWithEmailAndPassword } from "firebase/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function LoginScreen({ navigation }) {
  const handleRegister = () => {
    navigation.navigate("Sign Up");
  };

  const handleLogin = async (values) => {
    const encodedPassword = Base64.encode(values.password);

    try {
      await signInWithEmailAndPassword(auth, values.email, encodedPassword);
      navigation.navigate("Main");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ViewingScreen style={{}}>
      <Text style={styles.title}>Get Ready</Text>
      <Text style={styles.title}>
        To <Text style={styles.titleSpan}>Dive In</Text>
      </Text>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleLogin} // Update the onSubmit prop to use handleLogin
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.signUpForm}>
            {touched.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="Email"
              style={styles.input}
              keyboardType="default"
              clearButtonMode="always"
              autoCapitalize="none"
              autoCorrect={false}
            />
            {touched.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              keyboardType="default"
              clearButtonMode="always"
            />
            {touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <CustomButton onPress={handleSubmit}>Log In</CustomButton>
            <Text style="registerHyperlink">
              Don't have an account?{" "}
              <Text
                style={styles.registerHyperlinkSpan}
                onPress={handleRegister}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        )}
      </Formik>
    </ViewingScreen>
  );
}

// Rest of the component code

const styles = StyleSheet.create({
  signUpForm: {
    width: "100%",
    marginTop: 100,
  },
  title: {
    fontSize: 36,
  },
  titleSpan: {
    color: Palette.primary,
  },
  input: {
    borderBottomColor: Palette.primary,
    borderBottomWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginVertical: 15,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  registerHyperlink: {
    fontSize: 16,
    marginTop: 10,
  },
  registerHyperlinkSpan: {
    color: Palette.primary,
  },
});

export default LoginScreen;
