import React, { useState, useEffect }  from "react";
import axios from "axios";
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Games = () => {
    const [games, setGames] = useState([])
    const [token, setToken] = useState("");
    const getGamesUrl = "http://127.0.0.1:8000/api/v1/games/get_games";
    
    // saving the game id in async storage
    const handleClick = (event) => {
        AsyncStorage.setItem('game_id', event.currentTarget.id);
        // navigate("/questions");
    }
    // Get Info Function
    const getInfo = async () => {
        await AsyncStorage.getItem("token").then((token) => {
            setToken(token);
        });
    }
    // Get Games Function
    const getGames = () => {
        axios
    .get(getGamesUrl,{
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json'
        }
    })

    .then((response) => {
        const games = response.data.games;
        setGames(games);
    });

    }
    useEffect(() => {
        getInfo()
        getGames()
    }, [token]);

  
    return (
        <View>
                {games.map((game) => (
                    <TouchableOpacity className='game-card' nativeID={game.id} key={game.id} onPress={handleClick}>
                        <View className='game-info'>
                            <h2>OFFICE QUIZ #{game.id}</h2>
                            <p>Added {game.created_at.slice(8,10)} {game.created_at.slice(5,7)} at {game.created_at.slice(11,16)}</p>
                        </View>
                        <View className='game-contents'>
                            <h4>{game.questions_count} Questions</h4>
                            <View className='game-vl'></View>
                            <View className='points'><h4>Up to {game.points} Points </h4> <View className='game-coins'></View></View>
                        </View>
                    </TouchableOpacity>
                ))}
        </View>
    );
};
export default Games;