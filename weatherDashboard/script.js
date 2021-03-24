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
      tmperature: "100 degrees",
      humidity: "50%",
    },
    {
      date: "March 3, 2020",
      icon: "icon*",
      tmperature: "100 degrees",
      humidity: "50%",
    },
    {
      date: "March 4, 2020",
      icon: "icon*",
      tmperature: "100 degrees",
      humidity: "50%",
    },
    {
      date: "March 5, 2020",
      icon: "icon*",
      tmperature: "100 degrees",
      humidity: "50%",
    },
    {
      date: "March 6, 2020",
      icon: "icon*",
      tmperature: "100 degrees",
      humidity: "50%",
    },
  ];

  searchButtonEl.addEventListener("click", function () {
    storeCityHistory(cityName);
    diplayTodayWeather(citOneDayforecast);
    diplay5DayForcast(fiveDayForecast);
  });

  function storeCityHistory(cN) {
    console.log("cN: ", cN)
    diplayCityHistory();
  }

  function diplayCityHistory() {

  }

  function diplayTodayWeather(c1DF) {
    console.log("cN: ", c1DF)
    var oneDayCard = document.createElement("div") 
    for(let piece in c1DF){
        var oneDayP = document.createElement("p") 
        oneDayP.innerHTML = c1DF[piece]
        oneDayCard.append(oneDayP)
    }
    todayEl.append(oneDayCard)

  }

  function diplay5DayForcast(fiveDF) {
    console.log("fiveDF: ", fiveDF)
    for(let piece of fiveDF ){
        var oneFifthCard = document.createElement("div") 
        for(let key in piece ){
            var oneDayP = document.createElement("p") 
            oneDayP.innerHTML = piece[key]
            oneFifthCard.append(oneDayP)
        }
        forecastEl.append(oneFifthCard)
    }


  }
});
