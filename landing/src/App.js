import logo from './logo.svg';
import './App.css';
import img_center from './assets/2_a.png'

function App() {
  return (
    <div className="App">
      <div className="cartaz_container">
        <div className="ball"/>
        <div className="ball"/>
        <div className="ball"/>
        <div className="ball"/>
        <div className="ball"/>
        <div className="ball"/>
        <div className="ball"/>
        <img className="img" src={img_center}/>

        <div className="date_event">
          <h1 >FEV</h1>
          <h1 className="hairline">25</h1>
          <h1 className="hairline">2025</h1>
        </div>
        <div className="name_event hairline">
          <h1>FESTIVAL</h1>
          <h1>LA</h1>
          <h1>MUSIQUE</h1>
        </div>


      </div>

    </div>
  );
}

export default App;
