import logo from './logo.svg';
import './App.css';
import img_center from './assets/2_a.png'

function App() {
  return (
    <div className="App">
      <div className="ball"></div>

      <img className="img" src={img_center}/>

      <div className="date_event">
        <h1>FEV</h1>
        <h1>25</h1>
        <h1>2025</h1>
      </div>
      <div className="name_event">
        <h1>FESTIVAL</h1>
        <h1>LA</h1>
        <h1>MUSIQUE</h1>
      </div>




    </div>
  );
}

export default App;
