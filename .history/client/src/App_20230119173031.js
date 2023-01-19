import logo from './logo.svg';
import { Data } from "./utils/Data";
import './App.css';
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import ScatterChart from './components/ScatterChart';
import RadarChart from './components/RadarChart';

function App() {
  return (
    <div className="">
      <div>
        <h2 id="data">Data visualisation </h2>
        <form id="visual">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Saississez l'id d'un utilisateur</label>
          <input type="text" class="form-control" id="idUser" name="idUser" />
        </div><br/>
        <button type="submit" class="btn btn-primary">Visualiser</button>
        </form>
      </div>
      <ScatterChart />
      <BarChart />
      <LineChart />
      <PieChart />
      <RadarChart />
    </div>
  );
}

export default App;
