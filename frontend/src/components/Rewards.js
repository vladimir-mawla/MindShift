import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const Rewards = () => {
    const [rewards, setRewards] = useState([]);

  useEffect(() => {

    axios
      .get("http://127.0.0.1:8000/api/v1/rewards/get_rewards")

      .then((response) => {
        const s = response.data.rewards;
        setRewards(s);
      });

  }, []);


};

export default Rewards;