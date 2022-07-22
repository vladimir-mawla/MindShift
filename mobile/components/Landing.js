import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button } from "react-native";

export default function Landing() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.img}
        source={require("./logo.jpeg")}
      />
      <Text>Description Goes Here...</Text>
      <Button color='#95BDCE' title={"Login"} />
      <Button color='#95BDCE' title={"Register"} />
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