import axios from "axios";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button, TextInput } from "react-native";

export default function Register() {

    const registerUrl= 'http://127.0.0.1:8000/api/v1/register';
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeNameHandler = (name) => {
        setName(name);
      };
    
    const onChangeEmailHandler = (email) => {
        setEmail(email);
      };
    
    const onChangePasswordHandler = (password) => {
        setPassword(password);
      };
    const  register = async (event) => {
        if (!name.trim() || !email.trim()) {
            alert("Name or Email is invalid");
            return;
          }
          try {
        await axios.post(registerUrl, {
            name: name,
            email: email,
            password: password
        })
        .then((response) => {
            if (response) {
                alert('You have successfuly registered');
            } else {
                alert("An error has occurred");
            }
        })
        } catch(error){
            alert(error);
        }
          

      }

    return (
        <View>
            <Text style={styles.header}>Register</Text>
            <View style={styles.form}>
                <View style={styles.inputView}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Name"
                        placeholderTextColor="#003f5c"
                        onChangeText={onChangeNameHandler}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={onChangeEmailHandler}
                    />
                </View>
                <View style={styles.inputView}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={onChangePasswordHandler}
                    />
                </View>
                <View style={styles.alignButton}>
                <Button color='#95BDCE' title={"Register"} onPress={register}/>
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
        width:'75%'
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
        textAlign:'center',
      },
      form: {
          alignItems:'center'
      }
  });
