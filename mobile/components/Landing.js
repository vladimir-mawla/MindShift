import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button } from "react-native";

export default function Landing() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={styles.img}
        source={require("./logo.jpeg")}
      />
      <Text>Description Goes Here...</Text>

      <View style={styles.btns}>
        <View style={styles.align_btn}>
          <Button color='#95BDCE' title={"Login"} />
        </View>
        <View style={styles.align_btn}>
          <Button color='#95BDCE' title={"Register"} />
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 200,
    width: 200,
    marginTop: 100,
  },
  align_btn: {
    margin:5,
  },
  btns: {
    marginTop:150,
  }
});