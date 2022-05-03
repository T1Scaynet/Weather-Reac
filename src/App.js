import React, { useState } from "react";
// import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=dac8db5324f7f062a3c5235924b59368`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData(response);
          console.log(response);
        });
        setLocation("");
    }
  };

  return (
    <div className="App">

      <div className="search">
        <input 
          type="text" 
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Search for a city"
        />
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>

          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null }
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null }
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like.toFixed()}°F</p> : null }
            <p>Feels Like</p>
          </div>

          <div className="humidity">
            {data.main ? <p className="bold">{data.main.humidity.toFixed()}%</p> : null }
            <p>humidity</p>
          </div>

          <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed.toFixed()} MPH</p> : null }
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
