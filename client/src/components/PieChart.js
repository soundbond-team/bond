import React from "react";
import Chart from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import axios from "axios";


const PieChart = () => {

  const [dataset, setDataset] = React.useState([{}]);
  
  let nbrFaux = 0;
  let nbrVrai = 0;

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
  })

  const finalData = {
    labels: [
      'Faux',
      'Vrai',
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [nbrFaux, nbrVrai],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
      ],
      hoverOffset: 4
    }]
  };
  
  return (
    <div>
      <h2>PieChart Chart</h2>
      <Pie data={finalData}/>
    </div>
  );
};

export default PieChart;