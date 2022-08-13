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



};
export default Questions;