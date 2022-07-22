import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button } from "react-native";

export default function Landing() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("./logo.jpeg")}
      />
      <Text>Description Goes Here...</Text>

      <View style={styles.buttonContainer}>
        <View style={styles.alignButton}>
          <Button color='#95BDCE' title={"Login"} />
        </View>
        <View style={styles.alignButton}>
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
    
  },
  alignButton: {
    borderRadius: 5,
    padding: 8,
    margin: 5,
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    width: '80%',

  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  }
});