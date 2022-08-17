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

    // Get Info Function
    const getInfo = async () => {
        await AsyncStorage.getItem("reward_id").then((rewardId) => {
        setGameId(rewardId);
        });
        await AsyncStorage.getItem("token").then((token) => {
            setToken(token);
        });
        await AsyncStorage.getItem("user_id").then((userId) => {
            setUserId(userId);
        });
    }
    // Handle click function
    const handleClick = (id, needed_points) => {
        localStorage.setItem('reward_id', id);
        // navigate("/order");
        axios
        .post(pointsControlUrl, {
            user_id: localStorage.getItem("user_id"),
            points: -needed_points},{
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
        axios
        .post(addGainedRewardUrl, {
            user_id: localStorage.getItem("user_id"),
            reward_id: id},{
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })
    }

    const getRewards = () => {
        axios
        .get(getRewardsUrl, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        })

        .then((response) => {
            const s = response.data.rewards;
            setRewards(s);
        });
    }

    useEffect(() => {
        getInfo();
        getRewards();


    }, [token]);

    return (
        <View>
            <View className="reward">
                {rewards.map((reward, index) => (
                    <View className='reward-card' key={index} >
                        <View className='reward-info'>
                            <h2>{reward.name}</h2>
                            <p>{reward.description}</p>
                        </View>
                        <View className='reward-contents'>
                            <View className='reward-points'>
                                <View className='reward-coins'>
                                </View> 
                                <h4>{reward.needed_points} Points</h4>
                            </View>
                            <Button text={"REDEEM"} id={reward.id} onClick={()=>{handleClick( reward.id, reward.needed_points)}} className='redeem'/>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );

};

export default Rewards;