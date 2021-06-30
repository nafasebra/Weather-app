import React, { useState } from 'react'
import './App.css';

const api = {
  key: "aca9ec2a5fd98688c095263751e23330",
  baseLink: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  let [query, setQuery] = useState('');
  let [weather, setWeather] = useState({});

  const search = e => {
    setQuery(e.target.value);
    if(e.key === "Enter"){
      setWeather({});
      fetch(`${api.baseLink}weather?q=${query}&appid=${api.key}`)
        .then((response) => response.json())
        .then((result) => setWeather(result))
    }
  }

  let dateHandler = myDate => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[myDate.getDay()];
    let month = months[myDate.getMonth()];
    let date = myDate.getDate();
    let year = myDate.getFullYear();

    return `${day} ${month} ${date} ${year}`;
  }

  return (
    <div className="container">
      <div className="search-box">
        <input 
          type="text"
          placeholder="search..."
          onChange={(e) => search(e)} 
          value={query}
          onKeyPress={(e) => search(e)}
          />
      </div>
      {(typeof weather.main !== "undefined") ? (
        <div className="info-section">
          <h2>{weather.weather[0].main}</h2>
          <p className="thin_text">
            {weather.weather[0].description}
          </p>
          <h4 className="temp_text">
            {Math.round(weather.main.temp / 10)}°
          </h4>
          <p className="thin_text">{weather.name}, {weather.sys.country}</p>
          <p className="thin_text">{dateHandler(new Date())}</p>
        </div>
      ) : (
        <p style={{marginTop: "3em"}}>Nothing for display data :)</p>
      )}
{/*       
      <div className="info-section">
        <p className="thin_text">{dateHandler(new Date())}</p>
        <p className="thin_text">Tehran, Iran</p>
        <h4 className="temp_text">
          20°
        </h4>
        <h2 className="big_text">Suuny</h2>
        <p className="thin_text">
          very sunny
        </p>
      </div> */}
    </div>
  );
}

export default App;
