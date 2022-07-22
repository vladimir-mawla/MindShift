import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button, TextInput } from "react-native";

export default function Login() {
  return (
    <View>
        <View>
            <TextInput 
                placeholder="Email"
                placeholderTextColor="#003f5c"
            />
        </View>
        <View>
            <TextInput 
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
            />
        </View>
    </View>
  );
}

