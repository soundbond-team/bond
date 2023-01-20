import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import axios from "axios";


const PieChart = () => {

  const [dataset, setDataset] = React.useState([{}]);
  
  let nbrFaux = 0;
  let nbrVrai = 0;
  let nbrNum = [];
  let g1 = [];
  let g2 = [];
  let g3 = [];
  let g4 = [];
  let g5 = [];
  let g6 = [];
  

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
      g1.push({x:user.username_digit_count})
    }

    if(user.username_digit_count > 0 && user.username_digit_count < 3){
      g2.push({x:user.username_digit_count})
    }

    if(user.username_digit_count > 2 && user.username_digit_count < 5){
      g3.push({x:user.username_digit_count})
    }

    if(user.username_digit_count > 5 && user.username_digit_count < 7){
      g4.push({x:user.username_digit_count})
    }

    if(user.username_digit_count > 6 && user.username_digit_count < 9){
      g5.push({x:user.username_digit_count})

    }

    if(user.username_digit_count > 8 && user.username_digit_count < 11){
      g6.push({x:user.username_digit_count})
      
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
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue',
      'Six',
    ],
    datasets: [
      {
        type: 'pie',
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