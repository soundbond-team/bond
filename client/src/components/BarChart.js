import React from "react";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import axios from "axios";

const BarChart = () => {
  const [dataset, setDataset] = React.useState([{}]);
  const labels = ["Private accounts", "Public accounts"];
  let nbrPrive = 0;
  let nbrPublic = 0;
  let nbrFauxPrive = 0;
  let nbrFauxPublic = 0;
  let nbrVraiPrive = 0;
  let nbrVraiPublic = 0;

  const PYTHON_SERVER_URL = "http://localhost:8000";

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${PYTHON_SERVER_URL}/users`);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    const data = () => {
      getUsers().then((res) => {
        setDataset(res);
      });
    };

    data();
  }, []);

  dataset.map((user) => {
    if (user.user_is_private == 1) {
      nbrPrive = nbrPrive + 1;
    }
    if (user.user_is_private == 0) {
      nbrPublic = nbrPublic + 1;
    }
    if (user.is_fake == 1 && user.user_is_private == 1) {
      nbrFauxPrive = nbrFauxPrive + 1;
    }
    if (user.is_fake == 1 && user.user_is_private == 0) {
      nbrFauxPublic = nbrFauxPublic + 1;
    }
    if (user.is_fake == 0 && user.user_is_private == 1) {
      nbrVraiPrive = nbrVraiPrive + 1;
    }
    if (user.is_fake == 0 && user.user_is_private == 0) {
      nbrVraiPublic = nbrVraiPublic + 1;
    }
  });
  const finalData = {
    labels: labels,
    datasets: [
      {
        label: "Profil",
        backgroundColor: ["#164382"],
        borderColor: "rgb(255, 99, 132)",
        data: [nbrPrive, nbrPublic],
      },
      {
        label: "Real accounts",
        backgroundColor: ["rgb(54, 162, 235)"],
        borderColor: "rgb(255, 99, 132)",
        data: [nbrVraiPrive, nbrVraiPublic],
      },
      {
        label: "Fake accounts",
        backgroundColor: ["rgb(255, 99, 132)"],
        borderColor: "rgb(255, 99, 132)",
        data: [nbrFauxPrive, nbrFauxPublic],
      },
    ],
  };

  return (
    <div>
      <h2>BarChart</h2>
      <Bar data={finalData} />
      <p>
        In this Chart, the distribution of public and private accounts appears
        foreach accounts dataset : fake and real{" "}
      </p>
      <br />
      <br />
    </div>
  );
};

export default BarChart;
