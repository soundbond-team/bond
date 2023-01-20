import logo from './logo.svg';
import { Data } from "./utils/Data";
import './App.css';
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import ScatterChart from './components/ScatterChart';
import RadarChart from './components/RadarChart';
import React from 'react';

function App() {
  const [idUser, setIdUser] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIdUser(e.target.idUser.value);
  }

  return (
    <div className="">
      <div>
        <h2 id="data">Data visualisation </h2>
        <form id="visual" onSubmit={(e) => {handleSubmit(e)}}>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Saississez l'id d'un utilisateur</label>
          <input type="text" className="form-control" id="idUser" name="idUser" />
        </div><br/>
        <button type="submit" class="btn btn-primary">Visualiser</button>
        </form>
      </div >
      <div id="graph">
        <div>
          <div id="left"><ScatterChart idUser={idUser}/></div>
          <div id="right"><BarChart /></div>
        </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div>
          <div id="left"><PieChart /></div>
          <div id="right"><RadarChart /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
