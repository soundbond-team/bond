import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
      <h2 id="data">Data visualisation </h2>
      <form id="visual">
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Saississez l'id d'un utilisateur</label>
        <input type="text" class="form-control" id="idUser" name="idUser" />
      </div><br/>
      <button type="submit" class="btn btn-primary">Visualiser</button>
      </form>
    </div>
  );
}

export default App;
