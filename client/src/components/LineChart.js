import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";


const BarChart = () => {

  const [dataset, setDataset] = React.useState([{}]);
  const labels = ["Following", "Media", "Follow"];
  let follwCount = 0;
  let mediaCount = 0;
  let followingCount = 0;
  const PYTHON_SERVER_URL = "http://localhost:8000"

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${PYTHON_SERVER_URL}/users`);
        return res.data;
      }
      catch (err) {
        console.log(err);
      }
    };
    const data = () => {
      getUsers().then((res) => {
        setDataset(res);
      })
    };
    
    data();
  }, []);

  dataset.map((user) =>{
      if(user.user_media_count){
          mediaCount += user.user_media_count;
     }
      if(user.user_follower_count){
          follwCount += user.user_follower_count;
      }
      if(user.user_following_count){
          followingCount += user.user_following_count;
      }
  })
  const finalData = {
    labels: labels,
    datasets: [
      {
        label: "Nombre total",
        backgroundColor: ["#CD853F"],
        borderColor: "rgb(255, 99, 132)",
        data: [followingCount, mediaCount, follwCount]
      },
    ],
  };
  
  return (
    <div>
      <Line data={finalData}/>
    </div>
  );
};

export default BarChart;