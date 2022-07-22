import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button } from "react-native";

export default function Landing() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: 200, width: 200, marginTop: 100 }}
        source={require("./logo.jpeg")}
      />
      <Text>Description Goes Here...</Text>
      <Button title={"Login"} />
      <Button title={"Register"} />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    marginTop: 100,
  },

});