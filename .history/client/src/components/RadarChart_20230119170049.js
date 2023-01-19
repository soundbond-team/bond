import React from 'react'
import { Radar } from 'react-chartjs-2';
import axios from "axios";

const RadarChart = () => {

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
        getUsers().then((res)=>{
          const user_media_count = [];
          const user_follower_count = [];
          const user_following_count = [];
          const user_biography_length = [];
          const username_length=[];
          const username_digit_count =[];

          res.
        })
      }





    return (
        <div >
            <h2>RadarChart Chart</h2>
            <Radar
                datasetIdKey='id'
                data={{
                    labels: [
                        'user_media_count',
                        'user_follower_count',
                        'user_following_count',
                        'user_biography_length',
                        'username_length',
                        'username_digit_count'
                        
                      ],
                      datasets: [{
                        label: 'FakeAccounts Dataset',
                        data: [65, 59, 90, 81, 56, 40],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                      }, {
                        label: 'RealAccounts Dataset',
                        data: [48, 50, 66, 74,87, 100],
                        fill: true,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgb(54, 162, 235)',
                        pointBackgroundColor: 'rgb(54, 162, 235)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(54, 162, 235)'
                      }]
                    }
                }
            />
        </div>
    )
}


export default RadarChart;