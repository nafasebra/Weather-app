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
      fetch(`${api.baseLink}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => {
          res.json()
          console.log(query);
          console.log(res);
        })
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
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
          placeholder="search"
          onChange={(e) => search(e)} 
          value={query}
          onKeyPress={(e) => search(e)}
          />
      </div>
      <h2 className="status_text">Sunny</h2>
      <h4 className="temp_text">50<small><sup>&#9675;</sup></small>C</h4>
      <p className="location_text">Kashan city, iran</p>
      <p className="date_text">{dateHandler(new Date())}</p>
    </div>
  );
}

export default App;
