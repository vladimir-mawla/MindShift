import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button, TextInput } from "react-native";

export default function Login() {
  return (
    <View>
        <View style={styles.inputView}>
            <TextInput 
                style={styles.textInput}
                placeholder="Email"
                placeholderTextColor="#003f5c"
            />
        </View>
        <View style={styles.inputView}>
            <TextInput 
                style={styles.textInput}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
            />
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    inputView: {
        backgroundColor: "#95BDCE",
        borderRadius: 30,
        width: 200,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      
      textInput: {
        width:"100%",
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      }
  });
