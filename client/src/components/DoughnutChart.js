import React from "react";
import Chart from "chart.js/auto";
import { Pie, Doughnut } from "react-chartjs-2";
import { PolarArea } from "react-chartjs-2";
import axios from "axios";

const DoughnutChart = () => {
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

  const PYTHON_SERVER_URL = "http://localhost:8000";

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${PYTHON_SERVER_URL}/users/with_prediction`);
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
    if (user.is_fake == 1) {
      nbrFaux = nbrFaux + 1;
    }

    if (user.is_fake == 0) {
      nbrVrai = nbrVrai + 1;
    }

    if (user.username_digit_count == 0) {
      if (user.is_fake == 1) {
        g1E2 = g1E2 + 1;
      } else {
        g1E1 = g1E1 + 1;
      }
    }

    if (user.username_digit_count > 0 && user.username_digit_count < 3) {
      if (user.is_fake == 1) {
        g2E2 = g2E2 + 1;
      } else {
        g2E1 = g2E1 + 1;
      }
    }

    if (user.username_digit_count > 2 && user.username_digit_count < 5) {
      if (user.is_fake == 1) {
        g3E2 = g3E2 + 1;
      } else {
        g3E1 = g3E1 + 1;
      }
    }

    if (user.username_digit_count > 5 && user.username_digit_count < 7) {
      if (user.is_fake == 1) {
        g4E2 = g4E2 + 1;
      } else {
        g4E1 = g4E1 + 1;
      }
    }

    if (user.username_digit_count > 6 && user.username_digit_count < 9) {
      if (user.is_fake == 1) {
        g5E2 = g5E2 + 1;
      } else {
        g5E1 = g5E1 + 1;
      }
    }

    if (user.username_digit_count > 8 && user.username_digit_count < 11) {
      if (user.is_fake == 1) {
        g6E2 = g6E2 + 1;
      } else {
        g6E1 = g6E1 + 1;
      }
    }
  });

  console.log(g1E1);
  console.log(g1E2);
  console.log(g2E1);
  console.log(g2E2);
  console.log(g6E1);
  console.log(g6E2);

  S1 = g1E1 + g2E1 + g3E1 + g4E1 + g5E1 + g6E1;
  S2 = g1E2 + g2E2 + g3E2 + g4E2 + g5E2 + g6E2;

  console.log(S1);
  console.log(S2);

  var option1 = {
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        formatter: (value) => {
          let pourcentage = ((value * 100) / S1).toFixed(2) + "%";
          return pourcentage;
        },
      },
    },
  };

  var option2 = {
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        formatter: (value) => {
          let pourcentage = ((value * 100) / S2).toFixed(2) + "%";
          return pourcentage;
        },
      },
    },
  };

  const finalData = {
    labels: [
      "0 chiffres",
      "1-2 chiffres",
      "3-4 chiffres",
      "5-6 chiffres",
      "7-8 chiffres",
      "9-10 chiffres",
    ],
    datasets: [
      {
        type: "doughnut",
        label: "Compte vérifié, valeur",
        data: [g1E1, g2E1, g3E1, g4E1, g5E1, g6E1],
        backgroundColor: [
          "rgb(255, 99, 132)" /*rose */,
          "rgb(54, 162, 235)" /*bleu*/,
          "rgb(255, 205, 86)" /*orange*/,
          "rgb(0, 128, 0)" /*vert*/,
          "rgb(139, 0, 139)" /*violet */,
          "rgb(255, 20, 50)" /*rouge */,
        ],
      },

      {
        type: "doughnut",
        label: "Faux compte, valeur",
        data: [g1E2, g2E2, g3E2, g4E2, g5E2, g6E2],
        backgroundColor: [
          "rgb(255, 99, 132)" /*rose */,
          "rgb(54, 162, 235)" /*bleu*/,
          "rgb(255, 205, 86)" /*orange*/,
          "rgb(0, 128, 0)" /*vert*/,
          "rgb(139, 0, 139)" /*violet */,
          "rgb(255, 20, 50)" /*rouge */,
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Double Doughnut Chart</h2>
      <p>
        {" "}
        Le DoughnutChart représente la distribution des comptes vérifiés et des
        faux comptes en fonction du nombre de chiffres dans le nom
        d'utilisateur.
        <br></br>Le cercle extérieur représente la distribution des groupes de
        chiffres pour les comptes vérifiés dans notre ensemble de données. Le
        cercle intérieur représente la distribution des groupes de chiffres pour
        les faux comptes dans notre ensemble de données.{" "}
      </p>
      <Pie data={finalData} />
    </div>
  );
};

export default DoughnutChart;
