import React, { Component } from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import bg from "./bg.jpg";
const API_KEY = "7e42e4d16ffc4187a9ec79db1fadc110";

class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    description: "",
    error: "",
    loading: true
  };
  getWeather = async e => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        loading: false
      });
    } else {
      this.setState({
        temperature: "",
        city: "",
        country: "",
        humidity: "",
        description: "",
        error: "Please enter the value",
        loading: true
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="row">
            <div className="col-xs-5 title-container">
              <Titles />
            </div>
            <div className="col-xs-7 form-container">
              <Form getWeather={this.getWeather} />
              <Weather
                temperature={this.state.temperature}
                humidity={this.state.humidity}
                city={this.state.city}
                country={this.state.country}
                description={this.state.description}
                error={this.state.error}
                loading={this.state.loading}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
