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
          const follower_following = [];
          res.forEach((user) => {
            follower_following.push({x: user['user_follower_count'], y: user['user_following_count']})
          });
          if (idUser.idUser == null) {
            setDataset([
              {
                label: "Follower/Following",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: follower_following,
              },
            ])
          }
          else {
            setDataset([
              {
                label: "Follower/Following",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: follower_following,
              },
            ])
          }
        })
      };
      data();
    }, []);

    return (
        <div>
         <h2>ScatterChart Chart</h2>
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