window.addEventListener("load", function () {
  const apiKey = "003a54ddfe39c875d00206109efba335";
  const searchButtonEl = document.getElementById("search-button");
  const searchValueEl = document.querySelector("#search-value");
  const historyEl = document.querySelector("#history");
  const todayEl = document.querySelector("#today");
  const forecastEl = document.querySelector("#forecast");
  let cities = [];

  searchButtonEl.addEventListener("click", function () {
    const cityName = searchValueEl.value;
    storeCityHistory(cityName);
    diplayTodayWeather(cityName);
    diplay5DayForcast(cityName);
  })

  function storeCityHistory(cN) {
    cities.push(cN);
    localStorage.setItem("cities", JSON.stringify(cities));
    diplayCityHistory();
  }

  function diplayCityHistory() {
    historyEl.innerHTML = "";
    let myCityList = JSON.parse(localStorage.getItem("cities"));
    myCityList.reverse();
    for (let piece of myCityList) {
      const oneCity = document.createElement("p");
      oneCity.innerHTML = piece;
      oneCity.addEventListener("click", function(event){
        event.preventDefault()
        diplayTodayWeather(event.target.textContent);
        diplay5DayForcast(event.target.textContent)
      })
      historyEl.append(oneCity);
    }
  }

  function diplayTodayWeather(cN) {
    todayEl.innerHTML = "";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cN}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const dataObj = {
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
            dataObj.uvIndex = data1.value;
            const c1DF = dataObj;
            const oneDayCard = document.createElement("div");
            for (let piece in c1DF) {
                if (piece === "icon") {
                    const oneImage = document.createElement("img");
                    oneImage.setAttribute(
                      "src",
                      `http://openweathermap.org/img/w/${c1DF.icon}.png`
                    );
                    oneDayCard.append(oneImage);
                  } else {
                    var oneDayP = document.createElement("p");
                    oneDayP.innerHTML = c1DF[piece];
                    oneDayCard.append(oneDayP);
                  }
              
            }
            todayEl.append(oneDayCard);
          });
      });
  }

  function diplay5DayForcast(cN) {
    forecastEl.innerHTML = "";
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cN}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < 40; i += 8) {
          const myObj = {
            date: data.list[i].dt_txt,
            icon: data.list[i].weather[0].icon,
            temperature: data.list[i].main.temp,
            humidity: data.list[i].main.humidity,
          };

          const oneFifthCard = document.createElement("div");
          for (let key in myObj) {
            if (key === "icon") {
              const oneImage = document.createElement("img");
              oneImage.setAttribute(
                "src",
                `http://openweathermap.org/img/w/${myObj.icon}.png`
              );
              oneFifthCard.append(oneImage);
            } else {
              const oneDayP = document.createElement("p");
              oneDayP.innerHTML = myObj[key];
              oneFifthCard.append(oneDayP);
            }
          }
          forecastEl.append(oneFifthCard);
        }
      });
  }
});
