import "./App.css";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import ScatterChart from "./components/ScatterChart";
import RadarChart from "./components/RadarChart";
import React from "react";
import axios from "axios";
import { BsCheckCircleFill, BsXOctagonFill } from "react-icons/bs";

const PYTHON_SERVER_URL = "http://localhost:8000";

function App() {
  const [idUser, setIdUser] = React.useState(null);
  const [statusUser, setStatusUser] = React.useState(null);
  const [selectedGraph, setGraph] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdUser(e.target.idUser.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setGraph(e.target.value);
  };

  React.useEffect(() => {
    const getStatusUser = async () => {
      try {
        const res = await axios.get(`${PYTHON_SERVER_URL}/users/${idUser}/is_fake`);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    };
    const data = () => {
      getStatusUser().then((res) => {
        setStatusUser(res);
      });
    };

    data();
  }, [idUser]);
  return (
    <div className="">
      <div id="visual">
        <h2 id="data">Bond, James Bond</h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Saississez l'id d'un utilisateur
            </label>
            <input
              type="text"
              className="form-control"
              id="idUser"
              name="idUser"
            /><br/>
            <button type="submit" class="btn btn-primary" id="BoutonVerif">
              Vérifier
            </button>
            {statusUser === false && <BsCheckCircleFill  size="20px" id="circleFill"/>}
            {statusUser === true && <BsXOctagonFill size="20px" id="rainHeavy" />}
            {statusUser === undefined && <p>Aucun utilisateur entré ou utilisateur inexistant</p>}
          </div>
          <br />
        </form>
        <div>
          <h5>Circulez entre les différentes visualisation de données avec les
          boutons suivants:</h5>
        </div>
        <button
          class="btn btn-primary"
          onClick={handleChange}
          value="ScatterChart"
        >
          ScatterChart
        </button>
        <button class="btn btn-primary" onClick={handleChange} value="BarChart">
          BarChart
        </button>
        <button
          class="btn btn-primary"
          onClick={handleChange}
          value="DoughnutChart"
        >
          DoughnutChart
        </button>
        <button
          class="btn btn-primary"
          onClick={handleChange}
          value="RadarChart"
        >
          RadarChart
        </button>
      </div>
      <div id="graph">
        <div>
          {selectedGraph === "ScatterChart" && <ScatterChart />}
          {selectedGraph === "BarChart" && <BarChart />}
          {selectedGraph === "DoughnutChart" && <DoughnutChart />}
          {selectedGraph === "RadarChart" && <RadarChart />}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;