import React from "react";
import { Scatter } from "react-chartjs-2";
import axios from "axios";



export const ScatterChart = (idUser) => {
    const [dataset, setDataset] = React.useState([{}]);

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
          const false_follower_following = [];
          const true_follower_following = [];
          res.forEach((user) => {
            if (user['is_fake'] === 0)
              true_follower_following.push({x: user['user_follower_count'], y: user['user_following_count']})
            else
              false_follower_following.push({x: user['user_follower_count'], y: user['user_following_count']})
          });
          setDataset([
            {
              label: "Verified user",
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              data: true_follower_following,
            },
            {
              label: "Fake user",
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              data: false_follower_following,
            }
          ])
          
        })
      };
      data();
    }, []);

    return (
        <div>
         <h2>ScatterChart</h2>
        {dataset.length > 0 && (
            <Scatter
            data={{
                datasets: dataset,
            }}
            />
        )}
        </div>
    );
    }

export default ScatterChart;