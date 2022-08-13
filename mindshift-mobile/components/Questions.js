import React, { useState, useEffect }  from "react";
import axios from "axios";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Questions = () => {
    const navigate = useNavigate();
    const [questions, setQuestions] = useState([])
    const [name, setName] = useState(null);
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [gameId, setGameId] = useState("");
    const getQuestionsUrl = "http://127.0.0.1:8000/api/v1/questions/get_questions";
    const addPlayedGameUrl = "http://127.0.0.1:8000/api/v1/played_games/add_played_game";
    const addAnswerUrl = "http://127.0.0.1:8000/api/v1/answers/add_answer";
    const checkAnswerUrl = "http://127.0.0.1:8000/api/v1/answers/check_answer";
    const pointsControlUrl = "http://127.0.0.1:8000/api/v1/users/points_control";
    const testUrl = "http://127.0.0.1:8000/api/v1/users/test";
    const leaderPusherUrl = "http://127.0.0.1:8000/api/v1/leaderboards/leader_pusher";


    // Get Info Function
    const getInfo = async () => {
        await AsyncStorage.getItem("company_id").then((gameId) => {
        setGameId(gameId);
        });
        await AsyncStorage.getItem("token").then((token) => {
            setToken(token);
        });
        await AsyncStorage.getItem("user_id").then((userId) => {
            setUserId(userId);
        });
    }

    // Get Question Function 
    const getQuestions = () => {
        axios
        .post(getQuestionsUrl, {
            game_id: gameId},{
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
    
        .then((response) => {
            const s = response.data.questions;
            setQuestions(s);
        });
    }

    useEffect(() => {
        getInfo();
        getQuestions();
    }, [gameId]);
        
    // Add Played Game Function
    function gamePlayed(){
        axios
        .post(addPlayedGameUrl, {
            user_id: userId,
            game_id: gameId},{
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
    }

    // Submit Answers Function
    function submitAnswers(id, answer){
        axios
        .post(addAnswerUrl, {
            answer: answer,
            question_id: id,
            user_id: userId,
            game_id: gameId},{
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
        .then(()=> {
            axios
            .post(checkAnswerUrl, {
                question_id: id,
                user_id: userId,
                answer: answer,
                game_id: gameId},{
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json'
                }
            })
            .then((response) => {
                if(response.data["Status"] === "True"){
                    axios
                    .post(pointsControlUrl, {
                        user_id: userId,
                        points: response.data["Points"]},{
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/json'
                        }
                    })
                    axios
                    .post(testUrl, {
                        message: localStorage.getItem('company_id')},{
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/json'
                        }
                    })
                    axios
                    .get(leaderPusherUrl, {
                    
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: 'application/json'
                        }
                    })
                }
                // navigate('/page');
            })
        })
    }

};
export default Questions;