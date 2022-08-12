import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Leaderboard from "./components/Leaderboard";
import Games from "./components/Games";

export default function App() {
  return (
    <View style={styles.container}>
      <Games />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
