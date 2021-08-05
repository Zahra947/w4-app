import React from "react";
import "./App.css";

export default function Weather() {
  return (
    <div>
      <div className="container">
        <div className="row main">
          <div className="col-6 col-left">
            <div className="rowleft-2">
              <div className="col">
                <form className="form" id="search-form">
                  <input
                    className="search width"
                    type="search"
                    placeholder="Enter name of the city"
                    id="cityInput"
                    autocomplete="off"
                    autofocus="on"
                  />
                  <input className="search" type="submit" value="Search" />
                  <button className="search" id="current-location">
                    current
                  </button>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-6 rowleft-2">
                <div className="row city">
                  <h2 id="city">Tehran</h2>
                </div>
                <div className="row city">Last update:</div>
                <div className="row city" id="currentDay"></div>
                <div className="row citywhether" id="description"></div>
                <div className="row rowleft-2 citywhether">
                  Wind: <span id="wind">4</span> Km/h
                  <br />
                  Humidity:<span id="humidity">5</span> %
                </div>
              </div>
              <div className="col-6 rowleft-3">
                <div className="row icon">
                  <img src="" alt="" className="icon" id="icon" />
                </div>
                <div className="row degree" id="temperature"></div>
                <div className="row degree">
                  <a href="#" id="celsius-link" className="active">
                    °C
                  </a>
                </div>
                <div className="row degree">
                  <a href="#" id="fahrenheit-link">
                    °F
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 col-right">
            <div className="row" id="forecast">
              <div className="col-4 days"></div>
              <div className="col-4 daysDeg sat">
                <h1>°C</h1>
                <span className="max"></span>/<span className="min"></span>°C
              </div>
              <div className="col-4 sunny"></div>
            </div>
          </div>
          <div className="bottom-line">
            <a href="https://github.com/Zahra947/w4-app" target="-blank">
              Open-Source Code
            </a>
            by Zahra Rabiei
          </div>
        </div>
      </div>
      <script src="src/script.js"></script>
    </div>
  );
}
