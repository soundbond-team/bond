import React from "react";
import { Scatter } from "react-chartjs-2";
import axios from "axios";

export const ScatterChart = (idUser) => {
  const [dataset, setDataset] = React.useState([{}]);
  const PYTHON_SERVER_URL = "http://localhost:8000";

  React.useEffect(() => {
    console.log(idUser.idUser);
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
        const false_follower_following = [];
        const true_follower_following = [];
        res.forEach((user) => {
          if (user["is_fake"] === 0) {
            true_follower_following.push({
              x: user["user_follower_count"],
              y: user["user_following_count"],
              id: user["id"],
            });
          } else
            false_follower_following.push({
              x: user["user_follower_count"],
              y: user["user_following_count"],
              id: user["id"],
            });
        });
        setDataset([
          {
            label: "Compte vérifié",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 170)",
            data: true_follower_following,          
            pointBackgroundColor: function (context) {
              let color = "yellow";
              if (
                !(context.dataset.data[context.dataIndex].id === idUser.idUser)
              )
                color = "rgba(54, 162, 235, 0.2)";
              return color;
            },
          },
          {
            label: "Faux compte",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgb(255, 99, 132)",
            data: false_follower_following,
          },
        ]);
      });
    };
    data();
  }, [idUser]);

  return (
    <div>
      <h2>ScatterChart</h2>
      {dataset.length > 0 && (
        <Scatter
          data={{
            datasets: dataset,
          }}
        />
      )}
      <p>
        Le ScatterChart représente les utilsateurs en fonction du nombre d'utilisateurs qui les suivent et le nombre d'utilisateurs qu'ils suivent.
        Le nombre d'utilisateurs qui les suivent et le nombre d'utilisateurs suivis sont représentés respectivement par les axes x et y.
        Vous pouvez, en indiquant l'id d'un utilisateur, le mettre en évidence en cliquant sur le bouton "Visualiser", vous verrez le point se colorer en jaune.
      </p>
    </div>
  );
};

export default ScatterChart;
