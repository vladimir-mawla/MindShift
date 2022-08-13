import React, { useState, useEffect }  from "react";
import axios from "axios";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


const QuestionOptions = (props) => {
    const [options, setOptions] = useState([]);
    const [token, setToken] = useState("");
    const question_type = props.question_type;
    const getOptionsUrl = "http://127.0.0.1:8000/api/v1/question_options/get_options";


    // Get Info Function
    const getInfo = async () => {
        await AsyncStorage.getItem("token").then((token) => {
            setToken(token);
        });
    }


};
export default QuestionOptions;