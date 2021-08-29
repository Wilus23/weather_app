import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';
//Klucz do API
const APIKey = 'aad516aaf5fcc1091dab2233f2e03817'
function App() {
  const [value, setValue] = useState("");
  const [state, setState] = useState({
    date: "",
    main: "",
    sunrise: "",
    sunset: "",
    temp:"",
    pressure: "",
    wind: "",
    city: "",
    err: false,
  })
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const handleCitySubmit = (e) => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${APIKey}`;

    fetch(API)
      .then(response=>{
        if(response.ok){
          return response;
        }else{
          throw Error("Nie udało się")
        }
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString()
        setState({
          error: false,
          date: time,
          main: data.weather[0].main,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: value,
        })
      })
      .catch(err => {
        setState({
          error: true,
          city: value,
        })
      })
  }
  return (
    <div className="App">
      <Form
      value={value}
      change={handleInputChange}
      submit={handleCitySubmit}
      />
      <Result weather={state} error={state.error} />
    </div>
  );
}

export default App;
