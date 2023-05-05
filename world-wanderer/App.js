import { StyleSheet } from "react-native";
import LoadingScreen from "./app/screens/LoadingScreen";

export default function App() {
  return <LoadingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
