import React from "react";
import Chart from "chart.js/auto";
import { Pie, Doughnut } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import axios from "axios";


const PieChart = () => {

  const [dataset, setDataset] = React.useState([{}]);
  
  let nbrFaux = 0;
  let nbrVrai = 0;
  let nbrNum = [];
  let g1 = 0;
  let g2 = 0;
  let g3 = 0;
  let g4 = 0;
  let g5 = 0;
  let g6 = 0;
  

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
      g1 = g1+1;
    }

    if(user.username_digit_count > 0 && user.username_digit_count < 3){
      g2 = g2+1;
    }

    if(user.username_digit_count > 2 && user.username_digit_count < 5){
      g3 = g3+1;
    }

    if(user.username_digit_count > 5 && user.username_digit_count < 7){
      g4 = g4+1;
    }

    if(user.username_digit_count > 6 && user.username_digit_count < 9){
      g5 = g5+1;

    }

    if(user.username_digit_count > 8 && user.username_digit_count < 11){
      g6 = g6+1;
      
    }

  })

  console.log(g1)
  console.log(g2)
  console.log(g3)
  console.log(g4)
  console.log(g5)
  console.log(g6)



  const finalData = {
    labels: [
      '0 nbr',
      '1-2 nbr',
      '3-4 nbr',
      '5-6 nbr',
      '7-8 nbr',
      '9-10 nbr',
      'Vrai compte',
      'Faux compte'
    ],
    datasets: [
      {
        type: 'doughnut',
        label: ' AccountsCount',
        data: [g1, g2, g3, g4, g5, g6],
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
      {
        type:'pie',
        label:'DigitNumber',
        data:[nbrFaux, nbrVrai],
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