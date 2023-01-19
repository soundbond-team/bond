import React from "react";
import { Scatter } from "react-chartjs-2";
import axios from "axios";

const PYTHON_SERVER_URL = "http://localhost:8000"

export const getUsers = async () => {
  try {
    const res = await axios.get(`${PYTHON_SERVER_URL}/users`);
    return res.data;
  }
  catch (err) {
    console.log(err);
  }
};

export const data = () => {
  const res = getUsers().then((res) => {
    console.log(res)
    const follower_following = []
    res.forEach((user) => {
      follower_following.push({x: user['user_follower_count'], y: user['user_following_count']})
    })
    return follower_following
  })
  return res
};

console.log(data())

const dataset = [
  {
    label: "My First dataset",
    backgroundColor: "rgb(255, 99, 132)",
    borderColor: "rgb(255, 99, 132)",
    data: data()
    },
]

const ScatterChart = () => {
    return (
        <div>
        <Scatter data={dataset} />
        </div>
    );
    }

export default ScatterChart;