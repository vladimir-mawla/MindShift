import { View, Text, TouchableOpacity, Alert, Image } from "react-native";

export default function Landing() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: 200, width: 200, marginTop: 100 }}
        source={require("./logo.jpeg")}
      />
    </View>
  );
}
