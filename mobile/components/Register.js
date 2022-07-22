import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button, TextInput } from "react-native";

export default function Register() {
    return (
        <View>
            <Text style={styles.header}>Login</Text>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Name"
                    placeholderTextColor="#003f5c"
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
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
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput 
                    style={styles.textInput}
                    placeholder="Company Name"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.alignButton}>
              <Button color='#95BDCE' title={"Login"} />
            </View>
        </View>
      );
}
