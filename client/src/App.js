import "./App.css";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import ScatterChart from "./components/ScatterChart";
import RadarChart from "./components/RadarChart";
import React from "react";

function App() {
  const [idUser, setIdUser] = React.useState(false);
  const [selectedGraph, setGraph] = React.useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdUser(e.target.idUser.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setGraph(e.target.value);
  };

  return (
    <div className="">
      <div id="visual">
        <h2 id="data">Visualisation de données </h2>
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
            />
            <button type="submit" class="btn btn-primary">
              Visualiser
            </button>
          </div>
          <br />
        </form>
        <div>
          Circulez entre les différentes visualisation de données avec les
          boutons suivants:
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
          {selectedGraph === "ScatterChart" && <ScatterChart idUser={idUser} />}
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
