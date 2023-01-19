import React from 'react'
import { Radar } from 'react-chartjs-2';
import axios from "axios";

export const RadarChart = () => {

  const [dataset, setDataset] = React.useState([{}]);

    const PYTHON_SERVER_URL = "http://localhost:8000";

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

          const fakeAccountsDataset = [];
        


          var moy_fk_user_media_count;
          var moy_fk_user_follower_count
          var moy_fk_user_following_count;
          var moy_fk_user_biography_length;
          var moy_fk_username_length;
          var moy_fk_username_digit_count;

          res.forEach((user) => {
            if( user['is_fake'] != 0)
              fk_user_media_count.push(user['fk_user_media_count'])
          });

          res.forEach((user) => {
            if( user['is_fake'] != 0)
              fk_user_follower_count.push(user['fk_user_follower_count'])
          });

          res.forEach((user) => {
            if( user['is_fake'] != 0)
              fk_user_following_count.push(user['fk_user_following_count'])
          });

          res.forEach((user) => {
            if( user['is_fake'] != 0)
              fk_user_biography_length.push(user['fk_user_biography_length'])
          });

          res.forEach((user) => {
            if( user['is_fake'] != 0)
              fk_username_digit_count.push(user['fk_username_digit_count'])
          });

          res.forEach((user) => {
            if( user['is_fake'] != 0)
              fk_username_length.push(user['fk_username_length'])
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
          fakeAccountsDataset.push(moy_fk_username_digit_count);
          fakeAccountsDataset.push(moy_fk_username_length);



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
                        data: fakeAccountsDataset,
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
    ); 
}


