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

    // Get Options Functon
    const getOptions = () => {
        axios
        .post(getOptionsUrl, {
            question_id: props.question_id},{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                Accept: 'application/json'
            }
        })

        .then((response) => {
            setOptions(response.data["options"]);
        });
    }


    useEffect(() => {
        getInfo();
        getOptions();
    }, [token]);


    return(
        <View>
            {options.map((option, index) => (
              (question_type === 1) ? <View className='radio' key={index}><input onChange={(e) => props.setName(e.target.value)} type="radio" name={option.question_id} value={option.option} />{option.option} </View>:
              (question_type === 2) ? <View className='checkbox' key={index}><input onChange={(e) => props.setName(e.target.value)} type="checkbox" name={option.question_id} value={option.option} />{option.option} </View>:
              ''
            ))}
        </View>
    )
};
export default QuestionOptions;