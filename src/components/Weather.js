import React from "react";
import Loading from "./Loading";

const Weather = props => {
  const loadWeather = () => {
    if (props.loading === true || props.error) {
      return (
        <div>
          <p className="weather__error">{props.error}</p>
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="weather__info">
          <p className="weather__key">
            Location:{" "}
            <span className="weather__value">
              {props.city}, {props.country}
            </span>
          </p>
          <p className="weather__key">
            Temperature:{" "}
            <span className="weather__value">{props.temperature}</span>{" "}
          </p>
          <p className="weather__key">
            Humidity: <span className="weather__value">{props.humidity}</span>{" "}
          </p>
          <p className="weather__key">
            Conditions:{" "}
            <span className="weather__value">{props.description}</span>{" "}
          </p>
        </div>
      );
    }
  };
  return <div>{loadWeather()}</div>;
};

export default Weather;
