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

  const menuItems = [
    {
      title: 'ScatterChart',
      url: '/scatterchart',
    },
    {
      title: 'BarChart',
      url: '/barchart',
    },
    {
      title: 'Piechart',
      url: '/piechart',
    },
    {
      title: 'RadarChart',
      url: '/radarchart',
    },
  ];

  return (
    <div className="">
      <div id="visual">
        <h2 id="data">Data visualisation </h2>
        <form onSubmit={(e) => {handleSubmit(e)}}>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Saississez l'id d'un utilisateur</label>
          <input type="text" className="form-control" id="idUser" name="idUser" />
        </div><br/>
        </form>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownmenu" data-bs-toggle="dropdown" aria-expanded="false">
            Select a graph
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownmenu">
              {menuItems.map((menu, index) => {
                return (
                    <a class="dropdown-item" href={menu.url} key={index}>{menu.title}</a>
                );
              })}
           </div>
        </div>
      </div >
      <div id="graph">
        <div>
          <div id="one"><ScatterChart idUser={idUser}/></div>
          <div id="two"><BarChart /></div>
          <br/>
          <div id="four"><RadarChart /></div>
          <div id="three"><PieChart /></div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
