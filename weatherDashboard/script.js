window.addEventListener("load", function () {
  var apiKey = "003a54ddfe39c875d00206109efba335";
  //set up the dom elements
  const searchButtonEl = document.getElementById("search-button");
  const searchValueEl = document.querySelector("#search-value");
  const historyEl = document.querySelector("#history");
  const todayEl = document.querySelector("#today");
  const forecastEl = document.querySelector("#forecast");

  var cityName = "Dallas";
  var citOneDayforecast = {
    cityName: "Dallas",
    date: "March 2, 2020",
    icon: "icon*",
    tmperature: "100 degrees",
    humidity: "50%",
    windSpeed: "15 mph",
    uvIndex: "99uvi",
  };
  var fiveDayForecast = [
    {
      date: "March 2, 2020",
      icon: "icon*",
      temperature: "100 degrees",
      humidity: "50%",
    },
    {
      date: "March 3, 2020",
      icon: "icon*",
      temperature: "100 degrees",
      humidity: "50%",
    },
    {
      date: "March 4, 2020",
      icon: "icon*",
      temperature: "100 degrees",
      humidity: "50%",
    },
    {
      date: "March 5, 2020",
      icon: "icon*",
      temperature: "100 degrees",
      humidity: "50%",
    },
    {
      date: "March 6, 2020",
      icon: "icon*",
      temperature: "100 degrees",
      humidity: "50%",
    },
  ];
  var cities = [];

  searchButtonEl.addEventListener("click", function () {
    console.log("searchValueEl.value : ", searchValueEl.value);
    cityName = searchValueEl.value;
    storeCityHistory(cityName);
    diplayTodayWeather(cityName);
    diplay5DayForcast(cityName);
  });

  function storeCityHistory(cN) {
    console.log("cN: ", cN);
    cities.push(cN);
    localStorage.setItem("cities", JSON.stringify(cities));
    diplayCityHistory();
  }

  function diplayCityHistory() {
    historyEl.innerHTML = "";
    var myCityList = JSON.parse(localStorage.getItem("cities"));
    myCityList.reverse();
    for (let piece of myCityList) {
      var oneCity = document.createElement("p");
      oneCity.innerHTML = piece;
      historyEl.append(oneCity);
    }
  }

  function diplayTodayWeather(cN) {
    todayEl.innerHTML = ''
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cN}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => data)
      .then((data) => {
        var dataObj = {
          cityName: data.name,
          date: moment().format("LL"),
          icon: data.weather[0].icon,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          uvIndex: "99uv",
        };
        fetch(
          `https://api.openweathermap.org/data/2.5/uvi?appid=${apiKey}&lat=${data.coord.lat}&lon=${data.coord.lon}`
        )
          .then((res) => res.json())
          .then((data1) => {
            console.log("data1: ", data1);
            dataObj.uvIndex = data1.value;
            var c1DF = dataObj;
            console.log("cN: ", c1DF);
            var oneDayCard = document.createElement("div");
            for (let piece in c1DF) {
              var oneDayP = document.createElement("p");
              oneDayP.innerHTML = c1DF[piece];
              oneDayCard.append(oneDayP);
            }
            todayEl.append(oneDayCard);
          });
      });
  }

  function diplay5DayForcast(cN) {
    forecastEl.innerHTML = '';
      var fiveDF = fiveDayForecast
      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cN}&appid=${apiKey}`)
        .then((res) => res.json())
        .then((data) => {
            
            console.log("fiveData : ", data)
            for (let i=0; i <40; i+=8) {
                console.log("data.list[i] : ", data.list[i])
                var myObj = {
                    date: data.list[i].dt_txt,
                    icon: data.list[i].weather[0].icon,
                temperature: data.list[i].main.temp,
                    humidity: data.list[i].main.humidity,
                }
                

                var oneFifthCard = document.createElement("div");
                for (let key in myObj) {
                  var oneDayP = document.createElement("p");
                  oneDayP.innerHTML = myObj[key];
                  oneFifthCard.append(oneDayP);
                }
                forecastEl.append(oneFifthCard);
              }
            
        })
    
  }
});
