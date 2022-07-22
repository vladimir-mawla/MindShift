import { View, Text, TouchableOpacity, Alert} from 'react-native';

export default function Landing() {
    return (
        <View>
            <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}><Text>Login</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => Alert.alert('Simple Button pressed')}><Text>Register</Text></TouchableOpacity>
        </View>
    )
}