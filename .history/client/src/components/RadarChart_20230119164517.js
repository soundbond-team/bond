import React from 'react'
import { Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const RadarChart = ({data}) => {
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