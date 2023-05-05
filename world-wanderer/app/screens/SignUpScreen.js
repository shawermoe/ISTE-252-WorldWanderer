import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Base64 from "react-native-base64";

import ViewingScreen from "../components/ViewingScreen";
import Palette from "../config/Palette";
import CustomButton from "../components/CustomButton";

import auth from "../../firebaseConfig"; // Import the auth instance you just created
import { createUserWithEmailAndPassword } from "firebase/auth";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function SignUpScreen({ navigation }) {
  const [loading, setLoading] = useState(false);

  const handleLogIn = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = async (values) => {
    setLoading(true);
    const encodedPassword = Base64.encode(values.password);
    try {
      await createUserWithEmailAndPassword(auth, values.email, encodedPassword);
      setLoading(false);
      navigation.navigate("Login");
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ViewingScreen style={{}}>
      <Text style={styles.title}>Set Up</Text>
      <Text style={styles.title}>
        Your <Text style={styles.titleSpan}>Account</Text>
      </Text>

      <Formik
        initialValues={{
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSignUp} // Update the onSubmit prop to use handleSignUp
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.signUpForm}>
            <TextInput
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="Email"
              style={styles.input}
              keyboardType="email-address"
              clearButtonMode="always"
              autoCorrect={false}
              autoCapitalize="none"
            />
            {touched.email && <Text style={styles.error}>{errors.email}</Text>}
            <TextInput
              onChangeText={handleChange("username")}
              value={values.username}
              placeholder="Username"
              style={styles.input}
              keyboardType="default"
              clearButtonMode="always"
              autoCorrect={false}
              autoCapitalize="none"
            />
            {touched.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
            <TextInput
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Password"
              secureTextEntry
              style={styles.input}
              keyboardType="default"
              clearButtonMode="always"
              autoCorrect={false}
              autoCapitalize="none"
            />
            {touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <TextInput
              onChangeText={handleChange("confirmPassword")}
              value={values.confirmPassword}
              placeholder="Confirm Password"
              secureTextEntry
              style={styles.input}
              keyboardType="default"
              clearButtonMode="always"
              autoCorrect={false}
              autoCapitalize="none"
            />
            {touched.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
            <CustomButton onPress={handleSubmit}>Sign Up</CustomButton>
            <Text style="loginHyperlink">
              Already have an account?{" "}
              <Text style={styles.loginHyperlinkSpan} onPress={handleLogIn}>
                Log In
              </Text>
            </Text>
          </View>
        )}
      </Formik>
    </ViewingScreen>
  );
}

const styles = StyleSheet.create({
  signUpForm: {
    width: "100%",
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
  loginHyperlink: {
    fontSize: 16,
    marginTop: 10,
  },
  loginHyperlinkSpan: {
    color: Palette.primary,
  },
});

export default SignUpScreen;
