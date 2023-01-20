import React from "react";
import { Radar } from "react-chartjs-2";
import axios from "axios";

export const RadarChart = () => {
  const [fakedataset, setFakeDataset] = React.useState([]);
  const [realdataset, setRealDataset] = React.useState([]);

  const fakeAccountsDataset = [];
  const realAccountsDataset = [];

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

    function ArrayAvg(myArray) {
      var i = 0,
        summ = 0,
        ArrayLen = myArray.length;
      while (i < ArrayLen) {
        summ = summ + myArray[i++];
      }
      return summ / ArrayLen;
    }

    const data = () => {
      getUsers().then((res) => {
        //fakeAccounts datasets processing

        const fk_user_media_count = [];
        const fk_user_biography_length = [];
        const fk_username_length = [];
        const fk_username_digit_count = [];

        let moy_fk_user_media_count;
        let moy_fk_user_biography_length;
        let moy_fk_username_length;
        let moy_fk_username_digit_count;

        res.forEach((user) => {
          if (user.is_fake !== 0)
            fk_user_media_count.push(user.user_media_count);
        });

        res.forEach((user) => {
          if (user.is_fake !== 0)
            fk_user_biography_length.push(user.user_biography_length);
        });

        res.forEach((user) => {
          if (user.is_fake !== 0)
            fk_username_digit_count.push(user.username_digit_count);
        });

        res.forEach((user) => {
          if (user.is_fake !== 0) fk_username_length.push(user.username_length);
        });

        moy_fk_user_media_count = ArrayAvg(fk_user_media_count);
        moy_fk_username_digit_count = ArrayAvg(fk_username_digit_count);
        moy_fk_username_length = ArrayAvg(fk_username_length);
        moy_fk_user_biography_length = ArrayAvg(fk_user_biography_length);

        fakeAccountsDataset.push(moy_fk_user_media_count);
        fakeAccountsDataset.push(moy_fk_user_biography_length);
        fakeAccountsDataset.push(moy_fk_username_length);
        fakeAccountsDataset.push(moy_fk_username_digit_count);

        // RealAccounts datasets processing
        const rl_user_media_count = [];
        const rl_user_biography_length = [];
        const rl_username_length = [];
        const rl_username_digit_count = [];

        res.forEach((user) => {
          if (user.is_fake === 0)
            rl_user_media_count.push(user.user_media_count);
        });

        res.forEach((user) => {
          if (user.is_fake === 0)
            rl_user_biography_length.push(user.user_biography_length);
        });

        res.forEach((user) => {
          if (user.is_fake === 0)
            rl_username_digit_count.push(user.username_digit_count);
        });

        res.forEach((user) => {
          if (user.is_fake === 0) rl_username_length.push(user.username_length);
        });

        moy_fk_user_media_count = ArrayAvg(rl_user_media_count);
        moy_fk_username_digit_count = ArrayAvg(rl_username_digit_count);
        moy_fk_username_length = ArrayAvg(rl_username_length);
        moy_fk_user_biography_length = ArrayAvg(rl_user_biography_length);

        realAccountsDataset.push(moy_fk_user_media_count);
        realAccountsDataset.push(moy_fk_user_biography_length);
        realAccountsDataset.push(moy_fk_username_length);
        realAccountsDataset.push(moy_fk_username_digit_count);

        setFakeDataset(fakeAccountsDataset);
        setRealDataset(realAccountsDataset);
        console.log(fakeAccountsDataset);
        console.log(realAccountsDataset);
      });
    };
    data();
  }, []);

  return (
    <div>
      <h2>RadarChart</h2>
      <Radar
        datasetIdKey="id"
        data={{
          labels: [
            "Nombre de posts",
            "Longueur de biographie",
            "Longueur du nom d'utilisateur",
            "Nombre de chiffres dans le nom d'utilisateur",
          ],
          datasets: [
            {
              label: "Faux comptes",
              data: fakedataset,
              fill: true,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgb(255, 99, 132)",
              pointBackgroundColor: "rgb(255, 99, 132)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(255, 99, 132)",
            },
            {
              label: "Comptes vérifiés",
              data: realdataset,
              fill: true,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgb(54, 162, 235)",
              pointBackgroundColor: "rgb(54, 162, 235)",
              pointBorderColor: "#fff",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgb(54, 162, 235)",
            },
          ],
        }}
      />

      <p>
        Le RadarChart est un graphique qui permet de visualiser les données de
        manière circulaire, il permet de comparer les données entre elles, ici
        on a comparé les données des comptes vérifiés et des comptes non
        vérifiés en fonction de 4 caractéristiques : le nombre de posts, la 
        longueur de la biographie, la longueur du nom d'utilisateur et le nombre
        de chiffres dans le nom d'utilisateur.
      </p>
    </div>
  );
};

export default RadarChart;
