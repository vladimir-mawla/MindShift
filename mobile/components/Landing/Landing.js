import { View, Text, TouchableOpacity, Alert, Image } from "react-native";

export default function Landing() {
  return (
    <View>
      <Image source={require("./logo.jpeg")} />
    </View>
  );
}
