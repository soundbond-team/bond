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
          const fk_user_media_count = [];
          const fk_user_follower_count = [];
          const fk_user_following_count = [];
          const fk_user_biography_length = [];
          const fk_username_length=[];
          const fk_username_digit_count =[];

          res.array.forEach((user) => {
            if user.isFake != 0
          });
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