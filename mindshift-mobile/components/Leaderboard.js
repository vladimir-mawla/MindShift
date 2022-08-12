import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Pusher from "pusher-js"
import AsyncStorage from '@react-native-async-storage/async-storage';

const Leaderboard = () => {
    const [users, setUsers] = useState([])
    const [companyId, setCompanyId] = useState("");
    const [token, setToken] = useState("");
    const getLeaderboardUrl = "http://127.0.0.1:8000/api/v1/leaderboards/get_leaderboard";

    // Get Info Function
    const getInfo = async () => {
        await AsyncStorage.getItem("company_id").then((companyId) => {
        setCompanyId(companyId);
        });
        await AsyncStorage.getItem("token").then((token) => {
            setToken(token);
        });
    }
    // Get Leaderboard function
    const getLeaderboard = () => {
        axios
        .post(getLeaderboardUrl,{
            company_id: companyId},{
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json'
            }
        
        })
    
        .then((response) => {
            const s = response.data.users;
            setUsers(s);
        });
    }


    useEffect(async () => {
        getInfo()
        getLeaderboard()

        // Getting the data from pusher:
        var pusher = new Pusher('ccb92aa552693d2a8867', {
            cluster: 'ap2'
          });      
          var channel = pusher.subscribe('my-channel');
          channel.bind('my-event', data => {
    
            setUsers(data.message[0])
          });
        }, [token]);

        // sorting the state to display the leaderboard
        users.sort((a,b) => b.points - a.points);

  return (
    <View>
        {users.map((user, index) =>(
      <View key={index}>
          <Text>{user.name}</Text>
          <Text>{user.points}</Text>
      </View>
      ))}
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  HeadLeaderboard: {
    fontSize: 25,
    textAlign: 'center',
    padding: 20,
  },
});