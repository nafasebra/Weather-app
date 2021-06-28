import './App.css';

const api = {
  key: "aca9ec2a5fd98688c095263751e23330",
  baseLink: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  return (
    <div className="container">
      <h2 className="status_text">Sunny</h2>
      <h4 className="temp_text">50^c</h4>
      <p className="location_text">Kashan city, iran</p>
      <p className="date_text">sunday, june 21, 2021</p>
    </div>
  );
}

export default App;
