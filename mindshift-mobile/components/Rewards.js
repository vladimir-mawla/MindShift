import React, { useState, useEffect }  from "react";
import axios from "axios";
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Rewards = () => {
    const navigate = useNavigate();
    const [rewards, setRewards] = useState([]);
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [rewardId, setRewardId] = useState("");
    const pointsControlUrl = "http://127.0.0.1:8000/api/v1/users/points_control";
    const addGainedRewardUrl = "http://127.0.0.1:8000/api/v1/gained_rewards/add_gained_reward";
    const getRewardsUrl = "http://127.0.0.1:8000/api/v1/rewards/get_rewards";


};

export default Rewards;