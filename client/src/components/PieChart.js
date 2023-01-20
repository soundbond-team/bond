import React from "react";
import Chart from "chart.js/auto";
import { Pie, Doughnut } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import axios from "axios";


const PieChart = () => {

  const [dataset, setDataset] = React.useState([{}]);
  
  let nbrFaux = 0;
  let nbrVrai = 0;

  let g1E1 = 0;
  let g2E1 = 0;
  let g3E1 = 0;
  let g4E1 = 0;
  let g5E1 = 0;
  let g6E1 = 0;

  let g1E2 = 0;
  let g2E2 = 0;
  let g3E2 = 0;
  let g4E2 = 0;
  let g5E2 = 0;
  let g6E2 = 0;

  let S1 = 0;
  let S2 = 0;
  

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
     
    if(user.is_fake == 1){
      nbrFaux = nbrFaux+1;
    }

    if(user.is_fake == 0){
      nbrVrai = nbrVrai+1;
    }

    if(user.username_digit_count == 0){
      if(user.is_fake == 1){
          g1E2 = g1E2+1;
      }
      else {
        g1E1 = g1E1+1;
      }
    }

    if(user.username_digit_count > 0 && user.username_digit_count < 3){
      if(user.is_fake == 1){
        g2E2 = g2E2+1;
      }
      else {
        g2E1 = g2E1+1;
      }
    }

    if(user.username_digit_count > 2 && user.username_digit_count < 5){
      if(user.is_fake == 1){
        g3E2 = g3E2+1;
      }
      else {
        g3E1 = g3E1+1;
      }
    }

    if(user.username_digit_count > 5 && user.username_digit_count < 7){
      if(user.is_fake == 1){
        g4E2 = g4E2+1;
      }
      else {
        g4E1 = g4E1+1;
      }
    }

    if(user.username_digit_count > 6 && user.username_digit_count < 9){
      if(user.is_fake == 1){
        g5E2 = g5E2+1;
      }
      else {
        g5E1 = g5E1+1;
      }

    }

    if(user.username_digit_count > 8 && user.username_digit_count < 11){
      if(user.is_fake == 1){
        g6E2 = g6E2+1;
      }
      else {
        g6E1 = g6E1+1;
      }
      
    }

  })

  console.log(g1E1)
  console.log(g1E2)
  console.log(g2E1)
  console.log(g2E2)
  console.log(g6E1)
  console.log(g6E2)

  S1 = g1E1 + g2E1 + g3E1 + g4E1 + g5E1 + g6E1
  S2 = g1E2 + g2E2 + g3E2 + g4E2 + g5E2 + g6E2
  
  console.log(S1)
  console.log(S2)



  const finalData = {
    labels: [
      'faux',
      'vrai',
      'S1',
      'S2'
    ],
    datasets: [
      {
        type: 'doughnut',
        label: ' AccountsCount',
        data: [nbrFaux, nbrVrai],
        backgroundColor: [
          'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      {
        type: 'pie',
        label: ' Vraix/faux compte',
        data: [nbrFaux, nbrVrai],
        backgroundColor: [
          'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(255, 255, 128)',
      'rgb(255, 30, 50)',
      'rgb(255, 20, 50)',
        ],
        hoverOffset: 4
      },
        ],
        hoverOffset: 4
      },
   
      {
        type:'doughnut',
        label:'DigitNumber sachant Vrai/faux',
        data:[S2,S1],
        backgroundColor: [
          'rgb(25, 30, 50)',
          'rgba(2, 255, 128, .5)',
        ],
  
      },
      {
        type:'doughnut',
        label:'DigitNumber sachant Vrai',
        data:[S2,S1],
        backgroundColor: [
          'rgb(25, 30, 50)',
          'rgba(2, 255, 128, .5)',
        ],
  
      },
  ]
  };
  
  return (
    <div>
      <h2>PolarArea Chart</h2>
      <Pie data={finalData}/>
      <h3> Description</h3>
      <p>This chart shows the difference in term of DigitNumber in the username in both fake and real accounts</p>
    </div>
  );
};

export default PieChart;