import React from 'react'
import { Radar } from 'react-chartjs-2';
import axios from "axios";

export const RadarChart = () => {

  const fakeAccountsDataset = [];

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

      function ArrayAvg(myArray) {
        var i = 0, summ = 0, ArrayLen = myArray.length;
        while (i < ArrayLen) {
            summ = summ + myArray[i++];
        }
        return summ / ArrayLen;
      }
    
      const data = () => {
        getUsers().then((res)=>{

        //fakeAccounts datasets processing

          const fk_user_media_count = [];
          const fk_user_follower_count = [];
          const fk_user_following_count = [];
          const fk_user_biography_length = [];
          const fk_username_length=[];
          const fk_username_digit_count =[];

          

          var moy_fk_user_media_count;
          var moy_fk_user_follower_count
          var moy_fk_user_following_count;
          var moy_fk_user_biography_length;
          var moy_fk_username_length;
          var moy_fk_username_digit_count;


          

          res.forEach((user) => {
            if( user.is_fake !== 0)
              fk_user_media_count.push(user.user_media_count);
          });

          res.forEach((user) => {
            if( user.is_fake !== 0)
              fk_user_follower_count.push(user.user_follower_count)
          });

          res.forEach((user) => {
            if( user.is_fake!== 0)
              fk_user_following_count.push(user.user_following_count)
          });

          res.forEach((user) => {
            if( user.is_fake !== 0)
              fk_user_biography_length.push(user.user_biography_length)
          });

          res.forEach((user) => {
            if( user.is_fake !== 0)
              fk_username_digit_count.push(user.username_digit_count)
          });

          res.forEach((user) => {
            if( user.is_fake !== 0)
              fk_username_length.push(user.username_length)
          });

          moy_fk_user_media_count = ArrayAvg(fk_user_media_count);
          moy_fk_user_follower_count = ArrayAvg(fk_user_follower_count);
          moy_fk_user_following_count = ArrayAvg(fk_user_following_count);
          moy_fk_username_digit_count =ArrayAvg(fk_username_digit_count);
          moy_fk_username_length = ArrayAvg(fk_username_length);
          moy_fk_user_biography_length=ArrayAvg(fk_user_biography_length);

          fakeAccountsDataset.push(moy_fk_user_media_count);
          fakeAccountsDataset.push(moy_fk_user_follower_count);
          fakeAccountsDataset.push(moy_fk_user_following_count);
          fakeAccountsDataset.push(moy_fk_user_biography_length);
          fakeAccountsDataset.push(moy_fk_username_length);
          fakeAccountsDataset.push(moy_fk_username_digit_count);

  
        
          // RealAccounts datasets processing
          const rl_user_media_count = [];
          const rl_user_follower_count = [];
          const rl_user_following_count = [];
          const rl_user_biography_length = [];
          const rl_username_length=[];
          const rl_username_digit_count =[];

          const realAccountsDataset = [];


          res.forEach((user) => {
            if( user.is_fake === 0)
              rl_user_media_count.push(user.user_media_count);
          });

          res.forEach((user) => {
            if( user.is_fake === 0)
              rl_user_follower_count.push(user.user_follower_count)
          });

          res.forEach((user) => {
            if( user.is_fake=== 0)
              rl_user_following_count.push(user.user_following_count)
          });

          res.forEach((user) => {
            if( user.is_fake === 0)
              rl_user_biography_length.push(user.user_biography_length)
          });

          res.forEach((user) => {
            if( user.is_fake === 0)
              rl_username_digit_count.push(user.username_digit_count)
          });

          res.forEach((user) => {
            if( user.is_fake === 0)
              rl_username_length.push(user.username_length)
          });


          moy_fk_user_media_count=ArrayAvg(rl_user_media_count);
          moy_fk_user_follower_count=ArrayAvg(rl_user_follower_count);
          moy_fk_user_following_count=ArrayAvg(rl_user_following_count);
          moy_fk_username_digit_count=ArrayAvg(rl_username_digit_count);
          moy_fk_username_length=ArrayAvg(rl_username_length);
          moy_fk_user_biography_length=ArrayAvg(rl_user_biography_length);


          realAccountsDataset.push(moy_fk_user_media_count);
          realAccountsDataset.push(moy_fk_user_follower_count);
          realAccountsDataset.push(moy_fk_user_following_count);
          realAccountsDataset.push(moy_fk_user_biography_length);
          realAccountsDataset.push(moy_fk_username_length);
          realAccountsDataset.push(moy_fk_username_digit_count);

          console.log(realAccountsDataset);
          console.log(fakeAccountsDataset);

    


        })
      };
      data();

    });



    
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
                        data: [ 3.535, 116.64, 1878.03, 11.98, 11.39, 1.635 ],
                        fill: true,
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgb(255, 99, 132)',
                        pointBackgroundColor: 'rgb(255, 99, 132)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgb(255, 99, 132)'
                      }, {
                        label: 'RealAccounts Dataset',
                        data: [ 68.4738430583501, 419.8913480885312, 516.138832997988, 25.03420523138833, 11.070422535211268, 0.2665995975855131 ],
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
    ); 
}

export default RadarChart;