import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";


const BarChart = () => {

  const [dataset, setDataset] = React.useState([{}]);
  const labels = ["Privé", "Public"];
  let nbrPrive = 0;
  let nbrPublic = 0;

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
      if(user.user_is_private == 1){
          nbrPrive = nbrPrive+1;
     }
      if(user.user_is_private == 0){
          nbrPublic = nbrPublic+1;
      }
  })
  const finalData = {
    labels: labels,
    datasets: [
      {
        label: "Nombre de profil",
        backgroundColor: ["#CD853F","rgb(255, 99, 132)"],
        borderColor: "rgb(255, 99, 132)",
        data: [nbrPrive, nbrPublic]
      },
    ],
  };
  
  return (
    <div>
        <h2>BarChart</h2>
      <Bar data={finalData}/>
      <h3>Description</h3>
    </div>
  );
};

export default BarChart;