import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button, TextInput } from "react-native";

export default function Login() {
  return (
    <View>
        <Text style={styles.header}>Login</Text>
        <View style={styles.form}>
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
            <View style={styles.alignButton}>
            <Button color='#95BDCE' title={"Login"} />
            </View>
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    inputView: {
        borderWidth:1,
        borderRadius: 30,
        width: 200,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
      },
      alignButton: {
        borderRadius: 5,
        padding: 8,
        margin: 5,
      },
      textInput: {
        width:"100%",
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
      },
      header: {
        fontSize:70,
        fontWeight:"bold",
        marginBottom:120,
        marginRight:40
      },
      form: {
        alignItems:'center'
    }
  });
