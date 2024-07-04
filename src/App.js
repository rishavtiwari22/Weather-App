import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const API_KEY = "cbea8be86625e4f90f67ab796d471f6f";
  const API_URL = "https://api.openweathermap.org/data/2.5/";

  const [data, setData] = useState({});
  const [inputcity, setinputcity] = useState("");
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);
  const [newweathericon, setweathericon] = useState(null);
  const [weeklydata, setWeeklyWeather] = useState([]);

  const getweather = (inputcity) => {
    if (!inputcity) return alert("City name to bata bhai");

    axios
      .get(`${API_URL}weather?q=${inputcity}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        console.log("Response", res);
        setData(res.data);
        updateBackgroundImage(res.data.weather[0].main);
        weathericon(res.data.weather[0].main);
      })
      .catch((err) => {
        alert("Iska nahi mil raha hai bhai");
        console.log("Error", err);
      });

    axios
      .get(`${API_URL}forecast?q=${inputcity}&appid=${API_KEY}&units=metric`)
      .then((resp) => {
        console.log("Forecast Response", resp);
        setWeeklyWeather(resp.data.list);
        console.log("Weekly Data", weeklydata)
      })
      .catch((err) => {
        console.log("Error fetching forecast:", err);
      });
  };

  useEffect(() => {
    getweather("Allahabad");
  },[]);

  const handlesearch = () => {
    getweather(inputcity);
  };
  const handlechangeinput = (e) => {
    setinputcity(e.target.value);
  };

  function getWindDirection(deg) {
    const directions = [
      "N",
      "NNE",
      "NE",
      "ENE",
      "E",
      "ESE",
      "SE",
      "SSE",
      "S",
      "SSW",
      "SW",
      "WSW",
      "W",
      "WNW",
      "NW",
      "NNW",
    ];
    const index = Math.round(((deg %= 360) < 0 ? deg + 360 : deg) / 22.5);
    return directions[index];
  }

  function currenttime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return [
      `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`,
    ];
  };

  function updateBackgroundImage(weatherCondition) {
    let backgroundImage = null;
    switch (weatherCondition) {
      case "Thunderstorm":
        backgroundImage =
          "https://img.freepik.com/free-photo/weather-effects-composition_23-2149853306.jpg";
        break;
      case "Mist":
        backgroundImage =
          "https://images.unsplash.com/photo-1535025075092-5a1cf795130b?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvcmVzdCUyMG1pc3R8ZW58MHx8MHx8fDA%3D";
        break;
      case "Rain":
        backgroundImage =
          "https://cdn.naturettl.com/wp-content/uploads/2018/11/22004259/bright-environment-flora-1463530.jpg";
        break;
      case "Snow":
        backgroundImage =
          "https://img.freepik.com/free-vector/realistic-snowfall-background_23-2148402760.jpg?size=626&ext=jpg&ga=GA1.1.1686181617.1715948406&semt=ais_user";
        break;
      case "Clear":
        backgroundImage =
          "https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_1280.jpg";
        break;
      case "Clouds":
        backgroundImage =
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS4eea67-SDhdtmEdakxFFL4a9-4eAmb_Y0A&s";
        break;
      default:
        backgroundImage =
          "https://images.pexels.com/photos/912364/pexels-photo-912364.jpeg?cs=srgb&dl=pexels-brett-sayles-912364.jpg&fm=jpg";
    }
    setBackgroundImageUrl(backgroundImage);
  }

  function weathericon(weatherCondition) {
    let backgroundicons = null;
    switch (weatherCondition) {
      case "Thunderstorm":
        backgroundicons =
          "https://cdn-icons-png.flaticon.com/128/7774/7774305.png";
        break;
      case "Mist":
        backgroundicons =
          "https://cdn-icons-png.flaticon.com/128/4151/4151022.png";
        break;
      case "Rain":
        backgroundicons =
          "https://cdn-icons-png.flaticon.com/128/2469/2469994.png";
        break;
      case "Snow":
        backgroundicons =
          "https://cdn-icons-png.flaticon.com/128/7334/7334205.png";
        break;
      case "Clear":
        backgroundicons =
          "https://cdn-icons-png.flaticon.com/128/6974/6974833.png";
        break;
      case "Clouds":
        backgroundicons =
          "https://cdn-icons-png.flaticon.com/128/10542/10542369.png";
        break;
      case "Haze":
        backgroundicons =
          "https://cdn-icons-png.flaticon.com/128/3026/3026333.png";
        break;
      default:
        backgroundicons =
          "https://cdn-icons-png.flaticon.com/128/8044/8044513.png";
    }
    setweathericon(backgroundicons);
  }

  function cardweathericon(weatherCondition) {
    let backgroundicon = null;
    switch (weatherCondition) {
      case "Thunderstorm":
        backgroundicon =
          "https://cdn-icons-png.flaticon.com/128/7774/7774305.png";
        break;
      case "Mist":
        backgroundicon =
          "https://cdn-icons-png.flaticon.com/128/4151/4151022.png";
        break;
      case "Rain":
        backgroundicon =
          "https://cdn-icons-png.flaticon.com/128/2469/2469994.png";
        break;
      case "Snow":
        backgroundicon =
          "https://cdn-icons-png.flaticon.com/128/7334/7334205.png";
        break;
      case "Clear":
        backgroundicon =
          "https://cdn-icons-png.flaticon.com/128/6974/6974833.png";
        break;
      case "Clouds":
        backgroundicon =
          "https://cdn-icons-png.flaticon.com/128/10542/10542369.png";
        break;
      case "Haze":
        backgroundicon =
          "https://cdn-icons-png.flaticon.com/128/3026/3026333.png";
        break;
      default:
        backgroundicon =
          "https://cdn-icons-png.flaticon.com/128/8044/8044513.png";
    }
    return backgroundicon;
  }
  function getDayOfWeek(date) {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return daysOfWeek[new Date(date).getDay()];
  }
  

  return (
    <div
      className="d-flex flex-column flex-lg-row justify-content-start ps-5 py-3 "
      style={{
        backgroundImage: backgroundImageUrl
          ? `url(${backgroundImageUrl})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <div className="col-md-4 col-lg-3 col-xl-5 mt-5 ps-5 pt-5 pe-5">
        <div
          className="card text-body shadow-lg"
          style={{
            borderRadius: 35,
            backgroundColor: "rgba(255, 255, 255, 0.7 )",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}
        >
          <div className="card-body p-4">
            <div className="d-flex justify-content-between">
              <h4 className="flex-grow-1">{data?.name}</h4>
              <h6>
                {currenttime()} {getCurrentDate()}
              </h6>
            </div>

            <div className="d-grid col-12 mt-4 gap-3">
              <input
                type="text"
                className="form-control"
                value={inputcity}
                onChange={handlechangeinput}
                placeholder="Enter City Name"
              ></input>
              <button
                className="btn btn-primary"
                type="button"
                onClick={handlesearch}
              >
                Search
              </button>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold">
                {data?.main?.temp}°C
              </h6>
              <span className="small" style={{ color: "#01144a" }}>
                {data?.weather?.[0]?.main}
              </span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                <div>
                  <i
                    className="fas fa-wind fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1">Wind : {data?.wind?.speed}m/s</span>
                </div>
                <div>
                  <i
                    className="fas fa-wind fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1">
                    Direction : {data?.wind?.deg}{" "}
                    {getWindDirection(data?.wind?.deg)}
                  </span>
                </div>
                <div>
                  <i
                    className="fas fa-tint fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1">Real Feel : {data?.main?.temp}°C</span>
                </div>
                <div>
                  <i
                    className="fas fa-sun fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1">
                    Humidity : {data?.main?.humidity}
                  </span>
                </div>
                <div>
                  <i
                    className="fas fa-sun fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1">
                    Sea Level : {data?.main?.sea_level} hPa
                  </span>
                </div>
              </div>
              <div>
                <div className="mb-4">
                  <div>
                    <i
                      className="fas fa-sun fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    <span className="ms-1 mb-5">
                      Max : {data?.main?.temp_max}°C
                    </span>
                  </div>
                  <div>
                    <i
                      className="fas fa-sun fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    <span className="ms-1 mb-5">
                      Min : {data?.main?.temp_min}°C
                    </span>
                  </div>
                </div>
                <img src={newweathericon} width="100px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column justify-content-center ms-5 pt-5">
        {[0, 15, 31].map((index) => (
          <div
            className="card m-4"  
            style={{
              width: "15rem",
              height: "9rem",
              backgroundColor: "rgba(255, 255, 255, 0.7 )",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
            key={index}
          > 
            <div className="d-flex align-items-center m-1">
              <h5 className="m-2 pb-2 pe-5 ps-2">{getDayOfWeek(weeklydata[index]?.dt_txt.slice(0, 10))}</h5>
              <img
                className="ms-5 pb-1"
                src={cardweathericon(weeklydata[index]?.weather?.[0]?.main)}
                width="40px"
                height="40px"
                alt=""
              />
            </div>

            <div className="d-flex align-items-center m-1">
              <h6 className="ms-2">{weeklydata[index]?.dt_txt.slice(0, 10)}</h6>
              <p className="ms-5">{weeklydata[index]?.weather?.[0]?.main}</p>
            </div>

            <div className="d-flex align-items-center ">
              <p className="ms-2">
                Max : {weeklydata[index]?.main?.temp_max}°C
              </p>
              <p className="ms-4">  
                Min : {weeklydata[index]?.main?.temp_min}°C
              </p>
            </div>

          </div>
        ))}
      </div>  
      <div className="d-flex flex-column justify-content-center ms-5 pt-5">
        {[7, 23, 39].map((index) => (
          <div
            className="card m-4"  
            style={{
              width: "15rem",
              height: "9rem",
              backgroundColor: "rgba(255, 255, 255, 0.7 )",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.125)",
            }}
            key={index}
          > 
            <div className="d-flex align-items-center m-1">
              <h5 className="m-2 pb-2 pe-5 ps-2">{getDayOfWeek(weeklydata[index]?.dt_txt.slice(0, 10))}</h5>
              <img
                className="ms-5 pb-1"
                src={cardweathericon(weeklydata[index]?.weather?.[0]?.main)}
                width="40px"
                height="40px"
                alt=""
              />
            </div>

            <div className="d-flex align-items-center m-1">
              <h6 className="ms-2">{weeklydata[index]?.dt_txt.slice(0, 10)}</h6>
              <p className="ms-5">{weeklydata[index]?.weather?.[0]?.main}</p>
            </div>

            <div className="d-flex align-items-center ">
              <p className="ms-2">
                Max : {weeklydata[index]?.main?.temp_max}°C
              </p>
              <p className="ms-4">  
                Min : {weeklydata[index]?.main?.temp_min}°C
              </p>
            </div>

          </div>
        ))}
      </div>   
    </div>
  );
}

export default App;
