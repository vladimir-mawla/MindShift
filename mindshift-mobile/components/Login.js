import React, { useState } from "react";
import axios from "axios";
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image, Button, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login() {

  const loginUrl= 'http://127.0.0.1:8000/api/v1/login';
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmailHandler = (email) => {
      setEmail(email);
    };
  
  const onChangePasswordHandler = (password) => {
      setPassword(password);
    };
  const  login = async (event) => {
      if ( !email.trim()) {
          alert("Name or Email is invalid");
          return;
        }
        try {
      await axios.post(loginUrl, {
          email: email,
          password: password
      })
      .then((response) => {
        console.log(response)
          if (response) {
            alert('You have successfuly logged in');
            AsyncStorage.setItem("user_id", response.data.user.id);
            AsyncStorage.setItem("company_id", response.data.user.company_id);
            AsyncStorage.setItem('token', response.data.authorisation.token)          
          } else {
              alert("An error has occurred");
          }
      })
      } catch(error){
          console.log(error);
      }
        

    }

  return (
    <View>
        <Text style={styles.header}>Login</Text>
        <View style={styles.form}>
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
            <Button color='#95BDCE' title={"Login"} onPress={login}/>
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
